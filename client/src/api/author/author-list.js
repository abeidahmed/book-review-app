import gql from "graphql-tag";

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      _id
      name
      books {
        _id
        title
        description
        category {
          _id
          title
          description
        }
      }
      createdAt
      updatedAt
    }
  }
`;
