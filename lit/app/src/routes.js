import { isLoggedIn } from "./auth";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";

export default [
  {
    name: "Home",
    path: "",
    on: {
      every: isLoggedIn
    },
    response({ resolved }) {
      if (!resolved.every) {
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
    on: {
      every: isLoggedIn
    },
    response({ resolved }) {
      if (resolved.every) {
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
