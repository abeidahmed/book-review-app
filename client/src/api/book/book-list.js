import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query booksList {
    books {
      _id
      title
      description
      authors {
        _id
        name
      }
      createdAt
      category {
        _id
        title
      }
      creator {
        _id
        email
        fullName
      }
    }
  }
`;
