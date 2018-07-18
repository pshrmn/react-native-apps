import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      payload {
        token
      }
      error
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      payload {
        token
      }
      error
    }
  }
`;

export const CREATE_IDEA_MUTATION = gql`
  mutation createIdea(
    $name: String!,
    $description: String!,
    $type: IdeaType!,
    $public: Boolean = false
  ) {
    createIdea(
      name: $name,
      description: $description,
      type: $type
      public: $public
    ) {
      idea {
        id
        name
        description
        type
        public
      }
      error
    }
  }
`;

export const UPDATE_IDEA_MUTATION = gql`
  mutation updateIdea(
    $id: ID!,
    $name: String,
    $description: String,
    $type: IdeaType,
    $public: Boolean
  ) {
    updateIdea(
      id: $id,
      name: $name,
      description: $description,
      type: $type
      public: $public
    ) {
      idea {
        id
        name
        description
        type
        public
      }
      error
    }
  }
`;

export const DELETE_IDEA_MUTATION = gql`
  mutation deleteIdea($id: ID!) {
    deleteIdea(id: $id) {
      error
    }
  }
`;
