import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Query } from "react-apollo";

import { IDEA_QUERY } from "../gql/queries";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ({ response }) => (
  <View style={styles.container}>
    <Query query={IDEA_QUERY} variables={{ id: response.params.id }}>
      {({ data, loading }) => (
        loading
          ? <Text>Loading...</Text>
          : <View>
              <Text>{data.idea.name}</Text>
            </View>
      )}
    </Query>
  </View>
);
