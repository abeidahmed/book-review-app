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
  }

  input CategoryInput {
    title: String!
    description: String
  }

  type Query {
    users: [User!]!
    categories: [Category!]!
  }

  type Mutation {
    createCategory(categoryInput: CategoryInput): Category
    createUser(userInput: UserInput): AuthData
    loginUser(userInput: UserInput): AuthData
    logoutUser: User
  }
`;

module.exports = typeDefs;
