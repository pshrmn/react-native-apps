import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Query } from "react-apollo";

import { IDEA_QUERY } from "../gql/queries";

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
  }
});

export default ({ response }) => (
  <View style={styles.container}>
    <Query query={IDEA_QUERY} variables={{ id: response.params.id }}>
      {({ data: { idea }, loading }) => (
        loading
          ? <Text>Loading...</Text>
          : <View>
              <Text style={styles.nameText}>
                {idea.name}
              </Text>
              <Text style={styles.descriptionText}>
                {idea.description}
              </Text>
            </View>
      )}
    </Query>
  </View>
);
