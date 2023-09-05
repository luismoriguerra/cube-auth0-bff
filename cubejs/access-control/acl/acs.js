//@ts-check

const acl = require("./acs.json");

const checkVisibility =
  (role = "") =>
  (cubeName = "") => {
    console.log({
      msg: ":::: checkVisibility role",
      debug: { cubeName, role, acl },
    });
    return false;
  };

module.exports = {
  checkVisibility,
};
