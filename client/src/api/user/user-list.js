import gql from "graphql-tag";

export const USER_LIST = gql`
  query userList {
    users {
      _id
      email
      firstName
      lastName
      fullName
      role
      createdAt
      updatedAt
      books {
        _id
        title
        description
        author
        category {
          _id
          title
        }
      }
    }
  }
`;
