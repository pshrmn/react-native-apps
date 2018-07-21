import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withApollo, Query } from "react-apollo";
import { Link } from "@curi/react-native";

import { NeutralHighlight, NegativeHighlight } from "../components/buttons";
import { PROFILE_QUERY } from "../gql/queries";
import { logout } from "../auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  nameText: {
    fontSize: 50,
    color: "#222"
  },
  buttonText: {
    fontSize: 20,
    color: "#222"
  }
});

export default withApollo(({ router, client: apolloClient }) => (
  <Query query={PROFILE_QUERY}>
    {({ data, loading }) => (
      <View style={styles.container}>
        <Text style={styles.nameText}>{loading ? "" : data.me.name}</Text>
        <Link
          to="Change Password"
          anchor={NeutralHighlight}
        >
          <Text style={styles.buttonText}>
            Change Password
          </Text>
        </Link>
        <NeutralHighlight
          onPress={() => {
            router.history.go(-1);
          }}
        >
          <Text style={styles.buttonText}>
            Home
          </Text>
        </NeutralHighlight>
        <NegativeHighlight
          onPress={async () => {
            await logout();
            router.history.reset({
              locations: ["/sign-in#login"]
            });
            await apolloClient.cache.reset();      
          }}
        >
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </NegativeHighlight>
      </View>
    )}
  </Query>
));
