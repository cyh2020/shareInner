{
  type: 0,
  children: [
    {
      type: 1,
      ns: 0,
      tag: "div",
      tagType: 0,
      props: [
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
                content: "count",
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
                content: "count",
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
  codegenNode: undefined,
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
}
