const Category = require("../models/category");
const User = require("../models/user");
const { findBooks, findUser } = require("../helper/nest-query");

const categoryMeta = category => {
  return {
    ...category._doc,
    creator: () => findUser(category.creator),
    books: () => findBooks(category.books)
  };
};

const resolvers = {
  Query: {
    categories: async () => {
      try {
        const categories = await Category.find();
        return categories.map(category => {
          return categoryMeta(category);
        });
      } catch (err) {
        throw err;
      }
    }
  },

  Mutation: {
    createCategory: async (parent, args, { isAuth, userId }) => {
      const { title, description } = args.categoryInput;

      if (!isAuth) throw new Error("Please signup or login.");

      const isMatch = await Category.findOne({ title });
      if (isMatch) throw new Error("Category already exists.");

      try {
        const category = new Category({
          title,
          description,
          creator: userId
        });

        await category.save();

        const user = await User.findById(userId);
        if (!user) throw new Error("Cannot find user.");

        user.categories.push(category);

        user.save();

        return categoryMeta(category);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
