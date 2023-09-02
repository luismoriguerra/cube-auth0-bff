//@ts-check

const securityContextAccess = (query, { securityContext }) => {
  // Ensure `securityContext` has an `id` property
  if (!securityContext.user_id) {
    throw new Error("No id found in Security Context!");
  }

  return query;
};

module.exports = {
  securityContextAccess,
};
