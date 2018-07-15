import gql from "graphql-tag";

export const PROFILE_QUERY = gql`
  query profile {
    me {
      name
    }
  }
`;