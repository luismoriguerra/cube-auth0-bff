//@ts-check
// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

const { logQuery } = require("./access-control/log-control");
const {
  securityContextAccess,
} = require("./access-control/security-context-access");

// Cube.js configuration options: https://cube.dev/docs/config
/** @type{ import('@cubejs-backend/server-core').CreateOptions } */
module.exports = {
  queryRewrite: (query, context) => {
    logQuery(query, context);
    // securityContextAccess(query, context);
    return query;
  },
  scheduledRefreshTimer: 60 * 60,
  telemetry: false,
  orchestratorOptions: {
    continueWaitTimeout: 4, // define slow queries
  },
};
