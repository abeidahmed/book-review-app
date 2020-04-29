const User = require("../models/user");

const findUser = async id => {
  try {
    const user = await User.findById(id);
    return { ...user._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findUser
};
