import gql from "graphql-tag";

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $description: String, $categoryId: ID!, $authorIds: [ID!]!) {
    createBook(
      bookInput: {
        title: $title
        description: $description
        categoryId: $categoryId
        authorIds: $authorIds
      }
    ) {
      _id
    }
  }
`;
