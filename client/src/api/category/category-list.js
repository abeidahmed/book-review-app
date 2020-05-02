import gql from "graphql-tag";

export const GET_CATEGORIES = gql`
  query categoryList {
    categories {
      _id
      title
      description
      bookCount
      createdAt
      updatedAt
      books {
        _id
        title
        description
        author
        createdAt
        updatedAt
      }
    }
  }
`;
