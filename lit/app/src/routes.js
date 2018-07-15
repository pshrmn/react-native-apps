import { isLoggedIn } from "./auth";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";

export default [
  {
    name: "Home",
    path: "",
    match: {
      isLoggedIn
    },
    response({ resolved }) {
      if (!resolved.isLoggedIn) {
        return {
          redirectTo: {
            name: "Sign In"
          }
        };
      }
      return {
        body: Home
      };
    }
  },
  {
    name: "Sign In",
    path: "sign-in",
    match: {
      isLoggedIn
    },
    response({ resolved }) {
      if (resolved.isLoggedIn) {
        return {
          redirectTo: {
            name: "Home"
          }
        };
      }
      return {
        body: SignIn
      };
    }
  }
];
