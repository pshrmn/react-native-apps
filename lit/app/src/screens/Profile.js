import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { withApollo, Query } from "react-apollo";
import { Link } from "@curi/react-native";

import { PROFILE_QUERY } from "../gql/queries";
import { logout } from "../auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  nameText: {
    fontSize: 50
  },
  button: {
    marginVertical: 10,
    backgroundColor: "cyan",
    padding: 5
  },
  buttonText: {
    fontSize: 20
  }
});

export default withApollo(({ router, client: apolloClient }) => (
  <Query query={PROFILE_QUERY}>
    {({ data, loading }) => (
      <View style={styles.container}>
        <Text style={styles.nameText}>{loading ? "" : data.me.name}</Text>
        <Link
          to="Change Password"
          anchor={TouchableHighlight}
          style={styles.button}
          underlayColor="darkcyan"
        >
          <Text style={styles.buttonText}>
            Change Password
          </Text>
        </Link>
        <TouchableHighlight
          onPress={async () => {
            await logout();
            router.history.reset({
              locations: ["/sign-in#login"]
            });
            await apolloClient.cache.reset();      
          }}
          style={styles.button}
          underlayColor="darkcyan"
        >
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            router.history.go(-1);
          }}
          style={styles.button}
          underlayColor="darkcyan"
        >
          <Text style={styles.buttonText}>
            Home
          </Text>
        </TouchableHighlight>
      </View>
    )}
  </Query>
));
