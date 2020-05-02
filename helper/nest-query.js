const Book = require("../models/book");
const Category = require("../models/category");
const User = require("../models/user");

const findBooks = async ids => {
  try {
    const books = await Book.find({ _id: { $in: ids } });
    return books.map(book => {
      return {
        ...book._doc,
        category: () => findCategory(book.category),
        creator: () => findUser(book.creator),
        createdAt: () => book.createdAt.toISOString(),
        updatedAt: () => book.updatedAt.toISOString()
      };
    });
  } catch (err) {
    throw err;
  }
};

const findCategory = async id => {
  try {
    const category = await Category.findById(id);
    return {
      ...category._doc,
      books: () => findBooks(category.books),
      creator: () => findUser(category.creator),
      createdAt: () => category.createdAt.toISOString(),
      updatedAt: () => category.updatedAt.toISOString()
    };
  } catch (err) {
    throw err;
  }
};

const findUser = async id => {
  try {
    const user = await User.findById(id);
    return {
      ...user._doc,
      books: () => findBooks(user.books),
      createdAt: () => user.createdAt.toISOString(),
      updatedAt: () => user.updatedAt.toISOString()
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findBooks,
  findCategory,
  findUser
};
