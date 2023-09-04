function logQuery(query, context) {
  console.log(
    JSON.stringify(
      { msg: "{ query, context }", debug: { query, context } },
      null,
      2
    )
  );
}

module.exports = {
  logQuery,
};
