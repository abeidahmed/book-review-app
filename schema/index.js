const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String
    lastName: String
    fullName: String
    books: [Book!]!
    role: String!
    createdAt: String
    updatedAt: String
  }

  type AuthData {
    _id: ID!
    email: String!
    token: String!
  }

  input UserInput {
    email: String!
    password: String!
  }

  type Category {
    _id: ID!
    title: String!
    description: String
    creator: User!
    books: [Book!]!
    bookCount: Int!
    createdAt: String
    updatedAt: String
  }

  input CategoryInput {
    title: String!
    description: String
  }

  type Book {
    _id: ID!
    title: String!
    description: String
    authors: [Author!]!
    category: Category!
    creator: User!
    createdAt: String
    updatedAt: String
  }

  input BookInput {
    title: String!
    description: String
    categoryId: ID!
    authorIds: [ID!]!
  }

  type Author {
    _id: ID!
    name: String!
    books: [Book!]!
    createdAt: String
    updatedAt: String
  }

  input AuthorInput {
    name: String!
  }

  type Query {
    users: [User!]!
    categories: [Category!]!
    books: [Book!]!
    authors: [Author!]!
  }

  type Mutation {
    createAuthor(authorInput: AuthorInput): Author!
    createBook(bookInput: BookInput): Book
    createCategory(categoryInput: CategoryInput): Category
    createUser(userInput: UserInput): AuthData
    deleteCategory(id: ID!): ID!
    loginUser(userInput: UserInput): AuthData
  }
`;

module.exports = typeDefs;
