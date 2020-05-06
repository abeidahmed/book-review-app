import gql from "graphql-tag";

export const CREATE_CATEGORY = gql`
  mutation createCategory($title: String!, $description: String) {
    createCategory(categoryInput: { title: $title, description: $description }) {
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
        authors {
          _id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`;
