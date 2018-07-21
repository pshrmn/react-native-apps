import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { Query, Mutation } from "react-apollo";
import { Link } from "@curi/react-native";

import { IDEA_QUERY, IDEAS_QUERY, PROFILE_QUERY, PUBLIC_IDEAS_QUERY } from "../gql/queries";
import { DELETE_IDEA_MUTATION } from "../gql/mutations";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5ec930",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10
  },
  nameText: {
    fontSize: 50,
    color: "#fff"
  },
  descriptionText: {
    fontSize: 30,
    color: "#fff"
  },
  publicText: {
    fontSize: 20,
    color: "#fff"
  },
  button: {
    backgroundColor: "white",
    marginVertical: 5,
    padding: 5
  },
  buttonText: {
    fontSize: 20
  },
  loadingText: {
    fontSize: 20,
    color: "#fff"
  }
});

const DeleteIdea = ({ id, router }) => (
  <Mutation mutation={DELETE_IDEA_MUTATION}>
    {(deleteIdea, { loading, data, error }) => (
      <TouchableHighlight
        onPress={async () => {
          const { error, idea } = await deleteIdea({
            variables: { id },
            refetchQueries: [{ query: IDEAS_QUERY }, { query: PUBLIC_IDEAS_QUERY }]
          });
          if (error) {
            // TODO: display error
          } else {
            router.navigate({
              name: "Ideas",
              method: "REPLACE"
            });
          }
        }}
        style={styles.button}
        underlayColor="#DAF7A6"
      >
        <Text style={styles.buttonText}>
          Delete Idea
        </Text>
      </TouchableHighlight>
    )}
  </Mutation>
)

const OwnerControls = ({ id, creator, router }) => (
  <Query query={PROFILE_QUERY}>
    {({ loading, data }) => {
      return loading
        ? null
        : data.me.id === creator
          ? <View>
              <Link
                to="Edit Idea"
                params={{ id }}
                style={styles.button}
                underlayColor="#DAF7A6"
              >
                <Text style={styles.buttonText}>Edit Idea</Text>
              </Link>
              <DeleteIdea id={id} router={router} />
            </View>
          : null;
    }}
  </Query>
);

export default ({ response, router }) => (
  <View style={styles.container}>
    <Query query={IDEA_QUERY} variables={{ id: response.params.id }}>
      {({ data: { idea }, loading }) => {
        return loading
          ? <Text style={styles.loadingText}>
              Loading...
            </Text>
          : <View>
              <Text style={styles.nameText}>
                {idea.name}
              </Text>
              <Text style={styles.descriptionText}>
                {idea.description}
              </Text>
              {
                idea.public
                  ? <Text style={styles.publicText}>Public</Text>
                  : null
              }
              <OwnerControls
                id={idea.id}
                creator={idea.creator.id}
                router={router}
              />
            </View>;
      }}
    </Query>
  </View>
);
