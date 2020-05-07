const Author = require("../models/author");
const { findBooks } = require("../helper/nest-query");

const authorMeta = author => {
  return {
    ...author._doc,
    books: () => findBooks(author.books),
    createdAt: author.createdAt.toISOString(),
    updatedAt: author.updatedAt.toISOString()
  };
};

const resolvers = {
  Query: {
    authors: async () => {
      try {
        const authors = await Author.find();
        return authors.map(author => {
          return authorMeta(author);
        });
      } catch (err) {
        throw err;
      }
    }
  },

  Mutation: {
    createAuthor: async (parent, args) => {
      const { name } = args.authorInput;
      try {
        const author = await new Author({
          name
        });

        await author.save();
        return authorMeta(author);
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = resolvers;
