import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    categories: [Category!]!
    books: [Book!]!
  }
`;

export const resolvers = {};
