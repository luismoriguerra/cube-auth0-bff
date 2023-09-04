//@ts-check

const { verifyToken } = require("./auth0-jwt");
const { cubeTokenVerify } = require("./cube-jwt");

let checkAuthMiddleware = async (req, auth) => {
  const { query: reqQuery } = req;
  const { query } = reqQuery;
  console.log({
    msg: "req, auth",
    debug: {
      query,
      auth,
    },
  });

  // const decodedToken = await verifyToken(auth);
  let securityContext = {};

  try {
    securityContext = await cubeTokenVerify(auth);
  } catch (error) {
    securityContext = await verifyToken(auth);
  }

  // console.log({ msg: "checkAuth ::::::", securityContext });
  req.securityContext = securityContext;

  return req;
};

module.exports = {
  checkAuthMiddleware,
};
