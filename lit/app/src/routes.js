import { isLoggedIn } from "./auth";

import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import NewIdea from "./screens/NewIdea";
import Idea from "./screens/Idea";

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
  },
  {
    name: "Profile",
    path: "profile",
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
        body: Profile
      };
    }
  },
  {
    name: "New Idea",
    path: "new-idea",
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
        body: NewIdea
      };
    }
  },
  {
    name: "Idea",
    path: "idea/:id",
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
        body: Idea
      };
    }
  }
];
