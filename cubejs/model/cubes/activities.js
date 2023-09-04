cube(`activities`, {
  sql: `
      select * from activities a
      where a.timestamp >= current_date - interval '1 month'
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

    attributes: {
      sql: `attributes`,
      type: `string`,
    },

    username: {
      sql: `username`,
      type: `string`,
    },

    url: {
      sql: `url`,
      type: `string`,
    },

    memberid: {
      sql: `${CUBE}."memberId"`,
      type: `string`,
    },

    type: {
      sql: `type`,
      type: `string`,
    },

    platform: {
      sql: `platform`,
      type: `string`,
    },

    updatedbyid: {
      sql: `${CUBE}."updatedById"`,
      type: `string`,
    },

    channel: {
      sql: `channel`,
      type: `string`,
    },

    sourceid: {
      sql: `${CUBE}."sourceId"`,
      type: `string`,
    },

    sourceparentid: {
      sql: `${CUBE}."sourceParentId"`,
      type: `string`,
    },

    segmentid: {
      sql: `${CUBE}."segmentId"`,
      type: `string`,
    },

    organizationid: {
      sql: `${CUBE}."organizationId"`,
      type: `string`,
    },

    timestamp: {
      sql: `timestamp`,
      type: `time`,
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
