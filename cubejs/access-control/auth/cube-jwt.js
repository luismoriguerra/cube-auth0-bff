const jwt = require("jsonwebtoken");

const verify = (token, secretOrPublicKey, options, callback) => {
  jwt.verify(token, secretOrPublicKey, options, callback);
};

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    const secret = process.env.CUBEJS_API_SECRET;
    verify(token, secret, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resolve(decoded);
    });
  });

module.exports = {
  cubeTokenVerify: verifyToken,
};
