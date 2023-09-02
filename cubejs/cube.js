//@ts-check
// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

const { logQuery } = require("./access-control/log-control");

// Cube.js configuration options: https://cube.dev/docs/config
/** @type{ import('@cubejs-backend/server-core').CreateOptions } */
module.exports = {
  queryRewrite: (query) => {
    logQuery(query);
    // query.filters.push({
    //   member: `orders.created_at`,
    //   operator: "afterDate",
    //   values: ["2019-12-30"],
    // });

    return query;
  },
  scheduledRefreshTimer: 60 * 60,
  telemetry: false,
  orchestratorOptions: {
    continueWaitTimeout: 4, // define slow queries
  },
};
