//@ts-check

const { verifyToken } = require("./auth0-jwt");
const { cubeTokenVerify } = require("./cube-jwt");

let checkAuthMiddleware = async (req, auth) => {
  const { query: reqQuery } = req;
  const { query } = reqQuery;
  console.log({
    msg: ":: checkAuthMiddleware",
    debug: {
      query,
      auth,
    },
  });

  // const decodedToken = await verifyToken(auth);
  let securityContext = {};

  try {
    securityContext = await cubeTokenVerify(auth);
    securityContext.role = "anonymous";
  } catch (error) {
    securityContext = await verifyToken(auth);
    securityContext.role = "authenticated";
  }

  // console.log({ msg: "checkAuth ::::::", securityContext });
  req.securityContext = securityContext;
  console.log({ msg: "req.securityContext", debug: req.securityContext });
  return req;
};

module.exports = {
  checkAuthMiddleware,
};
