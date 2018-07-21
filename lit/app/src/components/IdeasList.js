import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "@curi/react-native";
import { Query } from "react-apollo";

const styles = StyleSheet.create({
  idea: {
    marginVertical: 5
  },
  text: {
    fontSize: 40,
  },
  loadingText: {
    fontSize: 20
  }
});


export default ({ query, queryKey, textColor }) => (
  <Query query={query}>
    {({ data, loading }) => (
      loading
        ? <Text style={[
            styles.text,
            styles.loadingText,
            { color: textColor }
          ]}>
            Loading...
          </Text>
        : <FlatList
            data={data[queryKey]}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.idea}>
                <Link
                  to="Idea"
                  params={{ id: item.id }}
                  anchor={TouchableOpacity}
                >
                  <Text
                    style={[
                      styles.text,
                      { color: textColor }
                    ]}
                  >
                    {item.name}
                  </Text>
                </Link>
              </View>
            )}
          />
    )}
  </Query>
);
