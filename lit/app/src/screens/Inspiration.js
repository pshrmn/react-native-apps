import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";
import IdeasList from "../components/IdeasList";
import { PUBLIC_IDEAS_QUERY } from "../gql/queries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default () => (
  <View style={styles.container}>
    <Title text="inspiration" background="indigo" />
    <IdeasList
      query={PUBLIC_IDEAS_QUERY}
      queryKey="publicIdeas"
      textColor="#222"
    />
  </View>
);
