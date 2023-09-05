cube(`public_cube`, {
  sql: `
      select * from activities a
      where a.timestamp >= current_date - interval '1 week'
      limit 2
    `,

  data_source: `default`,
  public: true,

  joins: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true,
    },
  },
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
});
