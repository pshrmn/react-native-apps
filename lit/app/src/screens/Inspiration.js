import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IdeasList from "../components/IdeasList";
import { PUBLIC_IDEAS_QUERY } from "../gql/queries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "plum"
  },
  header: {
    fontSize: 50
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.header}>
      Inspiration
    </Text>
    <IdeasList
      query={PUBLIC_IDEAS_QUERY}
      queryKey="publicIdeas"
      textColor="#000"
    />
  </View>
);
