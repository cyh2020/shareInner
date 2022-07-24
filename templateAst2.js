{
  type: 0,
  children: [
    {
      type: 1,
      ns: 0,
      tag: "div",
      tagType: 0,
      props: [
        {
          type: 7,
          name: "bind",
          arg: undefined,
          exp: {
            type: 4,
            loc: {
              source: "",
              start: {
                line: 1,
                column: 1,
                offset: 0,
              },
              end: {
                line: 1,
                column: 1,
                offset: 0,
              },
            },
            content: "_attrs",
            isStatic: false,
            constType: 0,
          },
          modifiers: [
          ],
          loc: {
            source: "",
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 1,
              column: 1,
              offset: 0,
            },
          },
        },
      ],
      isSelfClosing: false,
      children: [
        {
          type: 1,
          ns: 0,
          tag: "h1",
          tagType: 0,
          props: [
          ],
          isSelfClosing: false,
          children: [
            {
              type: 5,
              content: {
                type: 4,
                isStatic: false,
                constType: 0,
                content: "_ctx.count",
                loc: {
                  start: {
                    column: 12,
                    line: 2,
                    offset: 17,
                  },
                  end: {
                    column: 17,
                    line: 2,
                    offset: 22,
                  },
                  source: "count",
                },
              },
              loc: {
                start: {
                  column: 9,
                  line: 2,
                  offset: 14,
                },
                end: {
                  column: 20,
                  line: 2,
                  offset: 25,
                },
                source: "{{ count }}",
              },
            },
          ],
          loc: {
            start: {
              column: 5,
              line: 2,
              offset: 10,
            },
            end: {
              column: 25,
              line: 2,
              offset: 30,
            },
            source: "<h1>{{ count }}</h1>",
          },
          codegenNode: undefined,
          ssrCodegenNode: {
            type: 22,
            elements: [
              "<h1",
            ],
            loc: {
              source: "",
              start: {
                line: 1,
                column: 1,
                offset: 0,
              },
              end: {
                line: 1,
                column: 1,
                offset: 0,
              },
            },
          },
        },
        {
          type: 1,
          ns: 0,
          tag: "input",
          tagType: 0,
          props: [
            {
              type: 7,
              name: "model",
              exp: {
                type: 4,
                content: "_ctx.count",
                isStatic: false,
                constType: 0,
                loc: {
                  start: {
                    column: 21,
                    line: 3,
                    offset: 51,
                  },
                  end: {
                    column: 26,
                    line: 3,
                    offset: 56,
                  },
                  source: "count",
                },
              },
              arg: undefined,
              modifiers: [
              ],
              loc: {
                start: {
                  column: 12,
                  line: 3,
                  offset: 42,
                },
                end: {
                  column: 27,
                  line: 3,
                  offset: 57,
                },
                source: "v-model=\"count\"",
              },
            },
          ],
          isSelfClosing: false,
          children: [
          ],
          loc: {
            start: {
              column: 5,
              line: 3,
              offset: 35,
            },
            end: {
              column: 28,
              line: 3,
              offset: 58,
            },
            source: "<input v-model=\"count\">",
          },
          codegenNode: undefined,
          ssrCodegenNode: {
            type: 22,
            elements: [
              "<input",
              {
                type: 14,
                loc: {
                  source: "",
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                  end: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                },
                callee: Symbol(ssrRenderAttr),
                arguments: [
                  {
                    type: 4,
                    loc: {
                      source: "",
                      start: {
                        line: 1,
                        column: 1,
                        offset: 0,
                      },
                      end: {
                        line: 1,
                        column: 1,
                        offset: 0,
                      },
                    },
                    content: "value",
                    isStatic: true,
                    constType: 3,
                  },
                  {
                    type: 4,
                    content: "_ctx.count",
                    isStatic: false,
                    constType: 0,
                    loc: {
                      start: {
                        column: 21,
                        line: 3,
                        offset: 51,
                      },
                      end: {
                        column: 26,
                        line: 3,
                        offset: 56,
                      },
                      source: "count",
                    },
                  },
                ],
              },
            ],
            loc: {
              source: "",
              start: {
                line: 1,
                column: 1,
                offset: 0,
              },
              end: {
                line: 1,
                column: 1,
                offset: 0,
              },
            },
          },
        },
      ],
      loc: {
        start: {
          column: 1,
          line: 1,
          offset: 0,
        },
        end: {
          column: 9,
          line: 4,
          offset: 67,
        },
        source: "<div>\n    <h1>{{ count }}</h1>\n    <input v-model=\"count\">\n  </div>",
      },
      codegenNode: undefined,
      ssrCodegenNode: {
        type: 22,
        elements: [
          "<div",
          {
            type: 14,
            loc: {
              source: "",
              start: {
                line: 1,
                column: 1,
                offset: 0,
              },
              end: {
                line: 1,
                column: 1,
                offset: 0,
              },
            },
            callee: Symbol(ssrRenderAttrs),
            arguments: [
              {
                type: 4,
                loc: {
                  source: "",
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                  end: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                },
                content: "_attrs",
                isStatic: false,
                constType: 0,
              },
            ],
          },
        ],
        loc: {
          source: "",
          start: {
            line: 1,
            column: 1,
            offset: 0,
          },
          end: {
            line: 1,
            column: 1,
            offset: 0,
          },
        },
      },
    },
  ],
  helpers: [
  ],
  components: [
  ],
  directives: [
  ],
  hoists: [
  ],
  imports: [
  ],
  cached: 0,
  temps: 0,
  codegenNode: {
    type: 21,
    body: [
      {
        type: 14,
        loc: {
          source: "",
          start: {
            line: 1,
            column: 1,
            offset: 0,
          },
          end: {
            line: 1,
            column: 1,
            offset: 0,
          },
        },
        callee: "_push",
        arguments: [
          {
            type: 22,
            elements: [
              "<div",
              {
                type: 14,
                loc: {
                  source: "",
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                  end: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                },
                callee: Symbol(ssrRenderAttrs),
                arguments: [
                  {
                    type: 4,
                    loc: {
                      source: "",
                      start: {
                        line: 1,
                        column: 1,
                        offset: 0,
                      },
                      end: {
                        line: 1,
                        column: 1,
                        offset: 0,
                      },
                    },
                    content: "_attrs",
                    isStatic: false,
                    constType: 0,
                  },
                ],
              },
              "><h1>",
              {
                type: 14,
                loc: {
                  source: "",
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                  end: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                },
                callee: Symbol(ssrInterpolate),
                arguments: [
                  {
                    type: 4,
                    isStatic: false,
                    constType: 0,
                    content: "_ctx.count",
                    loc: {
                      start: {
                        column: 12,
                        line: 2,
                        offset: 17,
                      },
                      end: {
                        column: 17,
                        line: 2,
                        offset: 22,
                      },
                      source: "count",
                    },
                  },
                ],
              },
              "</h1><input",
              {
                type: 14,
                loc: {
                  source: "",
                  start: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                  end: {
                    line: 1,
                    column: 1,
                    offset: 0,
                  },
                },
                callee: Symbol(ssrRenderAttr),
                arguments: [
                  {
                    type: 4,
                    loc: {
                      source: "",
                      start: {
                        line: 1,
                        column: 1,
                        offset: 0,
                      },
                      end: {
                        line: 1,
                        column: 1,
                        offset: 0,
                      },
                    },
                    content: "value",
                    isStatic: true,
                    constType: 3,
                  },
                  {
                    type: 4,
                    content: "_ctx.count",
                    isStatic: false,
                    constType: 0,
                    loc: {
                      start: {
                        column: 21,
                        line: 3,
                        offset: 51,
                      },
                      end: {
                        column: 26,
                        line: 3,
                        offset: 56,
                      },
                      source: "count",
                    },
                  },
                ],
              },
              "></div>",
            ],
            loc: {
              source: "",
              start: {
                line: 1,
                column: 1,
                offset: 0,
              },
              end: {
                line: 1,
                column: 1,
                offset: 0,
              },
            },
          },
        ],
      },
    ],
    loc: {
      source: "",
      start: {
        line: 1,
        column: 1,
        offset: 0,
      },
      end: {
        line: 1,
        column: 1,
        offset: 0,
      },
    },
  },
  loc: {
    start: {
      column: 1,
      line: 1,
      offset: 0,
    },
    end: {
      column: 9,
      line: 4,
      offset: 67,
    },
    source: "<div>\n    <h1>{{ count }}</h1>\n    <input v-model=\"count\">\n  </div>",
  },
  filters: [
  ],
  ssrHelpers: [
    Symbol(ssrRenderAttr),
    Symbol(ssrRenderAttrs),
    Symbol(ssrInterpolate),
  ],
}
