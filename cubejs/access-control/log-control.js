function logQuery(query, context) {
  console.log({
    msg: ":::::: access-control:: query",
    debug: { query, context },
  });
}

module.exports = {
  logQuery,
};
