const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
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

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(userInput: UserInput): AuthData
    loginUser(userInput: UserInput): AuthData
  }
`;

module.exports = typeDefs;
