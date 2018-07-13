import { AsyncStorage } from "react-native";

import { TOKEN_KEY } from "./constants";

export const login = async function(token) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
}

export const logout = async function() {
  await AsyncStorage.removeItem(TOKEN_KEY);
}

export const isLoggedIn = async function() {
  const token = await AsyncStorage.getItem(TOKEN_KEY)
  return token != null;
}
