const Category = require("../models/category");
const User = require("../models/user");
const { findBooks, findUser } = require("../helper/nest-query");

const categoryMeta = category => {
  return {
    ...category._doc,
    creator: () => findUser(category.creator),
    books: () => findBooks(category.books),
    bookCount: category.books.length,
    createdAt: category.createdAt.toISOString(),
    updatedAt: category.updatedAt.toISOString()
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
    createCategory: async (parent, args, { isAuth, isAdmin, userId }) => {
      const { title, description } = args.categoryInput;

      if (!isAdmin && !isAuth) throw new Error("Unauthorized user.");

      const isMatch = await Category.findOne({ title });
      if (isMatch) throw new Error("Category already exists.");

      try {
        const category = new Category({
          title,
          description,
          creator: userId
        });

        await category.save();

        /**
         * Find the user who created the category and push the category id into
         * the user's category field.
         */
        const user = await User.findById(userId);
        if (!user) throw new Error("Cannot find user.");
        user.categories.push(category);
        await user.save();

        return categoryMeta(category);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
