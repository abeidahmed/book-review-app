const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String
    lastName: String
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
    creator: User
    books: [Book!]!
  }

  input CategoryInput {
    title: String!
    description: String
  }

  type Book {
    _id: ID!
    title: String!
    description: String
    author: User!
    category: Category!
  }

  input BookInput {
    title: String!
    description: String
    categoryId: ID!
  }

  type Query {
    users: [User!]!
    categories: [Category!]!
    books: [Book!]!
  }

  type Mutation {
    createCategory(categoryInput: CategoryInput): Category
    createBook(bookInput: BookInput): Book
    createUser(userInput: UserInput): AuthData
    loginUser(userInput: UserInput): AuthData
    logoutUser: User
  }
`;

module.exports = typeDefs;
