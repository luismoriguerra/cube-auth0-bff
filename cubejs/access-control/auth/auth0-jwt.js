const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const jwksUri = process.env.CUBEJS_JWK_URL;

const client = jwksClient({ jwksUri });
function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      callback(err, null);
      return;
    }

    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, getKey, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      return resolve(decoded);
    });
  });

module.exports = {
  verifyToken,
};
