import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree from "./Trees";

const trees = getTrees();

function App() {
  return (
    <div className="App">
      <Tree
        // width и height - максимальные размеры от svg
        // margin - лучше делать
        width={660}
        height={300}
        // margin - отступы от границ svg
        margin={{
          top: 15,
          right: 15,
          bottom: 15,
          left: 15
        }}
        trees={trees}
      />
    </div>
  );
}

function getTrees() {
  // return [
  //   {
  //     name: "Root",
  //     children: [
  //       {
  //         name: "Level 0",
  //         children: [
  //           {
  //             name: "Level 1"
  //           },
  //           {
  //             name: "Level 1"
  //           },
  //           {
  //             name: "Level 1"
  //           },
  //           {
  //             name: "Level 1"
  //           }
  //         ]
  //       },
  //       {
  //         name: "Level 0",
  //         children: [
  //           {
  //             name: "Level 1",
  //             children: [
  //               {
  //                 name: "Level 2"
  //               },
  //               {
  //                 name: "Level 2"
  //               },
  //               {
  //                 name: "Level 2",
  //                 children: [
  //                   {
  //                     name: "Level 3"
  //                   }
  //                 ]
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         name: "Level 0",
  //         children: [
  //           {
  //             name: "Level 1",
  //             children: [
  //               {
  //                 name: "Level 2"
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Root",
  //     children: [
  //       {
  //         name: "Level 0",
  //         children: [
  //           {
  //             name: "Level 1"
  //           }
  //         ]
  //       },
  //       {
  //         name: "Level 0"
  //       }
  //     ]
  //   },
  //   {
  //     name: "Single"
  //   },
  //   {
  //     name: "Single"
  //   },
  //   {
  //     name: "Single"
  //   }
  // ];
  return [
    {
      name: "EdcChoiceSector_质押式回购__00000",
      children: [
        {
          name: "EdcChoiceHangQing_Price_质押式国债回购品种(深交所)__00000",
          children: [
            {
              name: "EdcChoiceAddName_HQ_质押式国债回购品种(深交所)__00000"
            },
            {
              name: "EdcChoiceSetSector_HQ_质押式国债回购品种(深交所)__00000"
            }
          ]
        },
        {
          name: "EdcChoiceHangQing_Price_新质押式国债回购品种(上交所)__00000",
          children: [
            {
              name: "EdcChoiceAddName_HQ_新质押式国债回购品种(上交所)__00000"
            },
            {
              name: "EdcChoiceSetSector_HQ_新质押式国债回购品种(上交所)__00000"
            }
          ]
        },
        {
          name: "EdcChoiceHangQing_Price_质押式回购__00000",
          children: [
            {
              name: "EdcChoiceAddName_HQ_质押式回购__00000"
            },
            {
              name: "EdcChoiceSetSector_HQ_质押式回购__00000"
            }
          ]
        }
      ]
    },
    {
      name: "EdcChoiceSector_在市期货__00000",
      children: [
        {
          name: "EdcChoiceBasic_中金所全部品种___00000",
          children: [
            {
              name: "EdcChoiceHangQing_FutureSpecific_中金所全部品种__00000"
            },
            {
              name: "EdcChoiceHangQing_Price_中金所全部品种__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_中金所全部品种__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_中金所全部品种__00000"
                }
              ]
            },
            {
              name: "EdcChoiceHangQing_Volume_中金所全部品种__00000"
            }
          ]
        },
        {
          name: "EdcChoiceBasic_上海国际能源全部品种___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Price_上海国际能源全部品种__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_上海国际能源全部品种__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_上海国际能源全部品种__00000"
                }
              ]
            },
            {
              name:
                "EdcChoiceHangQing_FutureSpecific_上海国际能源全部品种__00000"
            },
            {
              name: "EdcChoiceHangQing_Volume_上海国际能源全部品种__00000"
            }
          ]
        },
        {
          name: "EdcChoiceBasic_上期所全部品种___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Volume_上期所全部品种__00000"
            },
            {
              name: "EdcChoiceHangQing_Price_上期所全部品种__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_上期所全部品种__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_上期所全部品种__00000"
                }
              ]
            },
            {
              name: "EdcChoiceHangQing_FutureSpecific_上期所全部品种__00000"
            }
          ]
        },
        {
          name: "EdcChoiceBasic_郑商所全部品种___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Volume_郑商所全部品种__00000"
            },
            {
              name: "EdcChoiceHangQing_Price_郑商所全部品种__00000",
              children: [
                {
                  name: "EdcChoiceSetSector_HQ_郑商所全部品种__00000"
                },
                {
                  name: "EdcChoiceAddName_HQ_郑商所全部品种__00000"
                }
              ]
            },
            {
              name: "EdcChoiceHangQing_FutureSpecific_郑商所全部品种__00000"
            }
          ]
        },
        {
          name: "EdcChoiceBasic_大商所全部品种___00000",
          children: [
            {
              name: "EdcChoiceHangQing_FutureSpecific_大商所全部品种__00000"
            },
            {
              name: "EdcChoiceHangQing_Volume_大商所全部品种__00000"
            },
            {
              name: "EdcChoiceHangQing_Price_大商所全部品种__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_大商所全部品种__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_大商所全部品种__00000"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "EdcChoiceSector_沪深交易所核心指数__00000",
      children: [
        {
          name: "EdcChoiceBasic_沪深交易所核心指数___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Price_沪深交易所核心指数__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_沪深交易所核心指数__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_沪深交易所核心指数__00000"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "EdcChoiceSector_行业指数__00000",
      children: [
        {
          name: "EdcChoiceBasic_AMAC行业指数___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Price_AMAC行业指数__00000",
              children: [
                {
                  name: "EdcChoiceSetSector_HQ_AMAC行业指数__00000"
                },
                {
                  name: "EdcChoiceAddName_HQ_AMAC行业指数__00000"
                }
              ]
            }
          ]
        },
        {
          name: "EdcChoiceBasic_沪深300行业指数___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Price_沪深300行业指数__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_沪深300行业指数__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_沪深300行业指数__00000"
                }
              ]
            }
          ]
        },
        {
          name: "EdcChoiceBasic_中信证券一级行业指数___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Price_中信证券一级行业指数__00000",
              children: [
                {
                  name: "EdcChoiceAddName_HQ_中信证券一级行业指数__00000"
                },
                {
                  name: "EdcChoiceSetSector_HQ_中信证券一级行业指数__00000"
                }
              ]
            }
          ]
        },
        {
          name: "EdcChoiceBasic_申万一级行业指数___00000",
          children: [
            {
              name: "EdcChoiceHangQing_Price_申万一级行业指数__00000",
              children: [
                {
                  name: "EdcChoiceSetSector_HQ_申万一级行业指数__00000"
                },
                {
                  name: "EdcChoiceAddName_HQ_申万一级行业指数__00000"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "EdcChoiceSector_重要外汇__00000",
      children: [
        {
          name: "EdcChoiceHangQing_Price_重要外汇__00000",
          children: [
            {
              name: "EdcChoiceAddName_HQ_重要外汇__00000"
            },
            {
              name: "EdcChoiceSetSector_HQ_重要外汇__00000"
            }
          ]
        }
      ]
    },
    {
      name: "EdcQuandl_LBMA/GOLD__00000"
    },
    {
      name: "EdcChoiceEdbQuery_中国主要利率__00000"
    },
    {
      name: "EdcChoiceEdb_中国主要利率__00000"
    }
  ];
}

export default App;
