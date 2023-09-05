function logQuery(query, context) {
  console.log(
    JSON.stringify(
      { msg: "::: log query rewrite", debug: { query, context } },
      null,
      2
    )
  );
}

module.exports = {
  logQuery,
};
