import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Trees.css";

const linkWidth = 75;

function renderTrees(ref, size, trees, callbacks) {
  const { width, height, margin } = size;

  // tree width - это "ширина" дерева, на самом деле ширина - другая фигня,
  // в данном случае это количество листьев
  // tree height - это количество уровней дерева
  // здесь считается суммарное количество ширин деревьев и
  // максимальная высота дерева, чтобы в процентном соотнешении посчитать
  // ширину и высоту каждого дерева
  // coefficients - это treeWidth и treeHeight каждого дерева соответсвенно
  const coefficients = trees.map(tree => getTreeCoefficients(tree));
  const sum = coefficients.reduce(
    (acc, current) => {
      acc.treeWidth = acc.treeWidth + current.treeWidth;
      acc.treeHeight =
        acc.treeHeight < current.treeHeight
          ? current.treeHeight
          : acc.treeHeight;
      return acc;
    },
    {
      treeWidth: 0,
      treeHeight: 0
    }
  );

  // если уровень 1 (одиночная точка), то ничего не делаем,
  // так как нам потом делить на это значение
  if (sum.treeHeight > 1) {
    sum.treeHeight--;
  }

  // считаем размеры каждого из деревьев, здесь уже width и height классические
  const sizes = coefficients.map(coefficient => {
    const treeHeight =
      coefficient.treeHeight === 1 ? 1 : coefficient.treeHeight - 1;
    const fixedTreeWidth = treeHeight === 1 ? 0 : linkWidth * treeHeight;
    const contentWidth = (treeHeight / sum.treeHeight) * width;
    const contentHeight = (coefficient.treeWidth / sum.treeWidth) * height;

    if (contentWidth > fixedTreeWidth) {
      return {
        width: fixedTreeWidth,
        height: contentHeight,
        offset: width - fixedTreeWidth
      };
    }

    return {
      width: contentWidth,
      height: contentHeight,
      offset: ((sum.treeHeight - coefficient.treeHeight + 1) / sum.treeHeight) * width
    };
  });

  sizes.forEach((size, i) => {
    size.xOffset = width - size.height + margin.left - size.offset;
  });

  // настраиваем нашу svg и оборачиваем в d3
  const node = d3
    .select(ref.current)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  // текущий отступ сверху от предыдущего дерева
  let yOffset = 0;
  trees.forEach((tree, i) => {
    renderTree(
      node,
      tree,
      {
        width: sizes[i].width,
        height: sizes[i].height,
        margin: margin,
        yOffset: yOffset,
        xOffset: sizes[i].xOffset
      },
      callbacks
    );
    yOffset += sizes[i].height;
  });
}

function renderTree(node, tree, size, callbacks) {
  const { width, height, yOffset, xOffset } = size;
  const { onNodeClick } = callbacks;

  // direction of links
  const orientations = {
    "left-to-right": {
      size: [height, width],
      x: function(d) {
        return height - d.y;
      },
      y: function(d) {
        return d.x;
      }
    }
  };

  // link render configuration
  const diagonal = d3
    .linkHorizontal()
    .x(orientations["left-to-right"].x)
    .y(orientations["left-to-right"].y);

  // append new tree in svg
  const svg = node
    .data(d3.entries(orientations))
    .append("g")
    .attr("transform", "translate(" + xOffset + "," + yOffset + ")");

  // не делай здесь струлочную функцию
  // минут 40 потратил из-за этого, так как посыпалось всё)
  svg.each(function(orientation) {
    const svg = d3.select(this);
    const o = orientation.value;

    // compute the layout
    const treemap = d3.tree().size(o.size);
    const nodes = treemap(d3.hierarchy(tree));
    const links = nodes.descendants().slice(1);

    // create the link lines
    svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d =>
        diagonal({
          source: d.parent,
          target: d
        })
      );

    // create the node circles
    const node = svg
      .selectAll(".node")
      .data(nodes.descendants())
      .enter()
      .append("g");
    node
      .append("circle")
      .attr("class", "node")
      .attr("r", 4.5)
      .attr("cx", o.x)
      .attr("cy", o.y)
      .on("click", onNodeClick);
  });
}

function getTreeCoefficients(tree) {
  // считаем treeWidth и treeHeight от корня дерева
  // описание treeWidth и treeHeight в renderTrees
  return getNodeCoefficients(tree, {
    treeWidth: 0,
    treeHeight: 1
  });
}

function getNodeCoefficients(treeNode, coefficients) {
  // здесь объединил два алгоритма
  // возможно правильнее бы было отдельно посчитать treeWidth и treeHeight
  // если надо будет разделить, сообщи :)
  if (!treeNode.children) {
    // считаем листья (если нет children, значит лист)
    // не вовзращаю отдельный объект, так как объект
    // coefficients прокидывается по всему дереву
    coefficients.treeWidth++;
    return coefficients;
  }

  // здесь как раз объединение, мы и для всех поддеревьев прокидываем алогритм подсчёта листьев
  // и считаем максимальное количество уровней
  // количество уровней считается рекурсивно для всех поддеревьев, относительно текущей вершины
  const childrenCoefficients = treeNode.children.map(node =>
    getNodeCoefficients(node, coefficients)
  );

  let max = -1;
  childrenCoefficients.forEach(coef => {
    const level = coef.treeHeight + 1;
    max = max < level ? level : max;
  });

  // возвращаю новый объект, так как в рекурсии перетиралось бы treeHeight каждым поддеревом
  return {
    treeWidth: coefficients.treeWidth,
    treeHeight: max
  };
}

export default function Trees({ width, height, margin, trees }) {
  const svgRef = useRef(null);
  // этот эффект тригеррится при любом изменении пропов
  useEffect(() => {
    renderTrees(
      svgRef,
      {
        width,
        height,
        margin
      },
      trees,
      {
        onNodeClick
      }
    );
  });

  function onNodeClick(node) {
    console.log(node);
  }

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}
