import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query booksList {
    books {
      _id
      title
      description
      author
      createdAt
      category {
        _id
        title
      }
      creator {
        _id
        email
      }
    }
  }
`;
