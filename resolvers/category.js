const Category = require("../models/category");
const User = require("../models/user");
const { findBooks, findUser } = require("../helper/nest-query");

const resolvers = {
  Query: {
    categories: async () => {
      try {
        const categories = await Category.find();
        return categories.map(category => {
          return {
            ...category._doc,
            creator: () => findUser(category.creator),
            books: () => findBooks(category.books)
          };
        });
      } catch (err) {
        throw err;
      }
    }
  },

  Mutation: {
    createCategory: async (parent, args, context) => {
      try {
        const category = new Category({
          title: args.categoryInput.title,
          description: args.categoryInput.description,
          creator: context.userId
        });

        await category.save();

        const user = await User.findById(context.userId);
        if (!user) throw new Error("Cannot find user.");

        user.categories.push(category);

        user.save();

        return {
          ...category._doc,
          creator: () => findUser(category.creator),
          books: () => findBooks(category.books)
        };
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
