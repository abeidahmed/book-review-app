const Book = require("../models/book");
const Category = require("../models/category");
const User = require("../models/user");
const { findCategory, findUser } = require("../helper/nest-query");

const bookMeta = book => {
  return {
    ...book._doc,
    creator: () => findUser(book.creator),
    category: () => findCategory(book.category)
  };
};

const resolvers = {
  Query: {
    books: async () => {
      try {
        const books = await Book.find();
        return books.map(book => {
          return bookMeta(book);
        });
      } catch (err) {
        throw err;
      }
    }
  },

  Mutation: {
    createBook: async (parent, args, context) => {
      try {
        const book = new Book({
          title: args.bookInput.title,
          description: args.bookInput.description,
          author: args.bookInput.author,
          category: args.bookInput.categoryId,
          creator: context.userId
        });

        await book.save();

        const category = await Category.findById(args.bookInput.categoryId);
        if (!category) throw new Error("Cannot find category.");
        category.books.push(book);
        await category.save();

        const user = await User.findById(context.userId);
        if (!user) throw new Error("Cannot find user.");
        user.books.push(book);
        await user.save();

        return bookMeta(book);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
