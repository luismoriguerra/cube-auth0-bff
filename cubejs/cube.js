//@ts-check
// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

const { checkAuthMiddleware } = require("./access-control/auth/checkAuthJwt");
const { logQuery } = require("./access-control/log-control");
const {
  securityContextAccess,
} = require("./access-control/security-context-access");

// Cube.js configuration options: https://cube.dev/docs/config
/** @type{ import('@cubejs-backend/server-core').CreateOptions } */
// ExpressRequest
module.exports = {
  checkAuth: checkAuthMiddleware,
  queryRewrite: (query, context) => {
    logQuery(query, context);
    return query;
  },
};
