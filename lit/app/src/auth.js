import { AsyncStorage } from "react-native";

import apolloClient from "./apollo";
import { TOKEN_KEY } from "./constants";
import { PROFILE_QUERY } from "./gql/queries";

export const login = async function(token) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export const logout = async function() {
  await AsyncStorage.removeItem(TOKEN_KEY);
}

export const isLoggedIn = async function() {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  if (!token) {
    return false;
  }
  const result = await apolloClient.query({
    query: PROFILE_QUERY
  });
  return result.data.me !== null;
}
