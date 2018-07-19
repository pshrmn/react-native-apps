import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { withApollo, Query } from "react-apollo";
import { Link } from "@curi/react-native";

import { PROFILE_QUERY } from "../gql/queries";
import { logout } from "../auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withApollo(({ router, client: apolloClient }) => (
  <Query query={PROFILE_QUERY}>
    {({ data, loading }) => (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>Name: {loading ? "" : data.me.name}</Text>
        <Link to="Home" anchor={Button} title="Home"/>
        <Link to="Change Password" anchor={Button} title="Change Password" />
        <Button
          title="Logout"
          onPress={async () => {
            await logout();
            router.history.reset({
              locations: ["/sign-in#login"]
            });
            await apolloClient.cache.reset();      
          }}
        />
      </View>
    )}
  </Query>
));
