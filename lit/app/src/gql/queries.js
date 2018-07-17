import gql from "graphql-tag";

export const PROFILE_QUERY = gql`
  query profile {
    me {
      name
    }
  }
`;

export const IDEA_QUERY = gql`
  query idea($id: ID!) {
    idea(id: $id) {
      name
      description
      type
      public
    }
  }
`;

export const IDEAS_QUERY = gql`
  query ideas {
    ideas {
      id
      name
      type
    }
  }
`;
