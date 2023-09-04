module.exports = {
  contextToAppId: ({ securityContext }) => {
    return `CUBEJS_APP_${securityContext.company}`;
  },
  extendContext: ({ securityContext }) => {
    return {
      isFinance: securityContext.department === "finance",
    };
  },
};
