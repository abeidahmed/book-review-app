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
    createCategory: async (parent, args, { isAdmin, userId }) => {
      const { title, description } = args.categoryInput;

      if (!isAdmin) throw new Error("Unauthorized user.");

      const isMatch = await Category.findOne({ title });
      if (isMatch) throw new Error("Category already exists.");

      if (!title) throw new Error("Category title cannot be blank.");

      if (title.length > 255) throw new Error("Category title exceeds 255 characters.");

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
    },
    deleteCategory: async (parent, { id }, { isAdmin }) => {
      if (!isAdmin) throw new Error("Unauthorized user");
      try {
        const category = await Category.findById(id);
        if (!category) throw new Error("Category does not exist.");

        // Delete the category from the user's categories field as well.
        const user = await User.findById(category.creator);
        const categoryIndex = user.categories.indexOf(category._id);
        if (category.index !== -1) {
          user.categories.splice(categoryIndex, 1);
          await user.save();
        }

        // Lastly we want to delete the category that was intended to deleted.
        await Category.deleteOne({ _id: id });

        return id;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
