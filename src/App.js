import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './Trees';

const trees = getTrees();

function App() {
  return (
    <div className="App">
      <Tree
        // width и height - максимальные размеры от svg
        // margin - лучше делать
        width={800}
        height={800}
        // margin - отступы от границ svg
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        }}
        trees={trees}
      />
    </div>
  );
}

function getTrees() {
  return [
    {
      name: "Root",
      children: [
        {
          name: "Level 0",
          children: [
            {
              name: "Level 1"
            },
            {
              name: "Level 1"
            },
            {
              name: "Level 1"
            },
            {
              name: "Level 1"
            }
          ]
        },
        {
          name: "Level 0",
          children: [
            {
              name: "Level 1",
              children: [
                {
                  name: "Level 2"
                },
                {
                  name: "Level 2"
                },
                {
                  name: "Level 2",
                  children: [
                    {
                      name: "Level 3"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Level 0",
          children: [
            {
              name: "Level 1",
              children: [
                {
                  name: "Level 2"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Root",
      children: [
        {
          name: "Level 0",
          children: [
            {
              name: "Level 1"
            }
          ]
        },
        {
          name: "Level 0"
        }
      ]
    },
    {
      name: "Single"
    },
    {
      name: "Single"
    },
    {
      name: "Single"
    }
  ];
}

export default App;
