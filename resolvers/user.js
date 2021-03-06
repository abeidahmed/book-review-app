const bcrypt = require("bcryptjs");
const validator = require("validator");
const User = require("../models/user");
const { findBooks } = require("../helper/nest-query");

const resolvers = {
  Query: {
    users: async (parent, args, { isAdmin }) => {
      if (!isAdmin) throw new Error("Unauthorized user.");

      try {
        const users = await User.find();
        return users.map(user => {
          return {
            ...user._doc,
            fullName: user.fullName,
            books: () => findBooks(user.books),
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString()
          };
        });
      } catch (err) {
        throw err;
      }
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      try {
        const { email, password } = args.userInput;

        if (!email) throw new Error("Email address is required.");

        if (!password) throw new Error("Password is required.");

        if (!validator.isEmail(email)) {
          throw new Error("Invalid email address.");
        }

        const isMatch = await User.findOne({ email });
        if (isMatch) throw new Error("Email address is already registered.");

        if (password.length < 6) throw new Error("Password is too short. Min length is 6.");

        const user = new User({
          email,
          password
        });

        /**
         * Generate jwt token. Function listed in user model.
         */
        const token = await user.generateAuthToken();

        await user.save();

        return { ...user._doc, token };
      } catch (err) {
        throw err;
      }
    },
    loginUser: async (parent, args) => {
      const { email, password } = args.userInput;
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("Invalid credentials.");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid credentials.");

        /**
         * Generate jwt token. Function listed in user model.
         */
        const token = await user.generateAuthToken();

        return { ...user._doc, token };
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
