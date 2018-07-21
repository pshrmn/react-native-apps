import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";
import IdeasList from "../components/IdeasList";
import { IDEAS_QUERY } from "../gql/queries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default () => (
  <View style={styles.container}>
    <Title text="your ideas" background="cyan" color="#222" />
    <IdeasList
      query={IDEAS_QUERY}
      queryKey="ideas"
      textColor="#222"
    />
  </View>
);
