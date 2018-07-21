import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IdeasList from "../components/IdeasList";
import { IDEAS_QUERY } from "../gql/queries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1E5219"
  },
  header: {
    fontSize: 50,
    color: "#fff"
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.header}>
      Your Ideas
    </Text>
    <IdeasList
      query={IDEAS_QUERY}
      queryKey="ideas"
      textColor="#fff"
    />
  </View>
);
