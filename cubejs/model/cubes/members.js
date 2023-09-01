cube(`members`, {
  sql_table: `public.members`,

  data_source: `default`,

  joins: {},

  dimensions: {
    contributions: {
      sql: `contributions`,
      type: `string`,
    },

    attributes: {
      sql: `attributes`,
      type: `string`,
    },

    displayname: {
      sql: `${CUBE}."displayName"`,
      type: `string`,
    },
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
