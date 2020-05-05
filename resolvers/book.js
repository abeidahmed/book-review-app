const Book = require("../models/book");
const Category = require("../models/category");
const User = require("../models/user");
const { findCategory, findUser } = require("../helper/nest-query");

const bookMeta = book => {
  return {
    ...book._doc,
    creator: () => findUser(book.creator),
    category: () => findCategory(book.category),
    createdAt: book.createdAt.toISOString(),
    updatedAt: book.updatedAt.toISOString()
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
    createBook: async (parent, args, { isAdmin, userId }) => {
      const { title, description, author, categoryId } = args.bookInput;

      if (!isAdmin) throw new Error("Unauthorized user.");

      const isMatch = await Book.findOne({ title });
      if (isMatch) throw new Error("Book already exists.");

      if (!title) throw new Error("Book title cannot be blank.");

      if (title.length > 255) throw new Error("Book title exceeds 255 characters.");

      try {
        const book = new Book({
          title,
          description,
          author,
          category: categoryId,
          creator: userId
        });

        await book.save();

        /**
         * Find the category that the book is listed to and push the book
         * into the category field.
         */
        const category = await Category.findById(categoryId);
        if (!category) throw new Error("Cannot find category.");
        category.books.push(book);
        await category.save();

        /**
         * Find the user who created the book and push the book id into
         * the user's book field.
         */
        const user = await User.findById(userId);
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
