cube(`private_cube`, {
  sql: `select * from members limit 2`,

  data_source: `default`,
  public:
    COMPILE_CONTEXT.checkVisibility &&
    COMPILE_CONTEXT.checkVisibility(`private_cube`),
  joins: {},

  dimensions: {
    emails: {
      sql: `emails`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `string`,
      primary_key: true,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
  },

  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});

// view(`private_view`, {
//   description: `private_view`,
//   public:
//     COMPILE_CONTEXT.checkVisibility &&
//     COMPILE_CONTEXT.checkVisibility("private_view"),
//   includes: [private_cube.id, private_cube.emails, private_cube.count],
// });
