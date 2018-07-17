import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Query } from "react-apollo";
import { Link } from "@curi/react-native";

import { IDEAS_QUERY } from "../gql/queries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "cyan"
  },
  idea: {

  },
  text: {
    fontSize: 40,
    color: "firebrick"
  }
});

export default () => (
  <View style={styles.container}>
    <Query query={IDEAS_QUERY}>
      {({ data, loading }) => (
        loading
          ? <Text>Loading...</Text>
          : <FlatList
              data={data.ideas}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.idea}>
                  <Link to="Idea" params={{ id: item.id }}>
                    <Text style={styles.text}>{item.name}</Text>
                  </Link>
                </View>
              )}
            />
      )}
    </Query>
  </View>
);
