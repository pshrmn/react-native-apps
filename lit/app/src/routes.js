import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import NewIdea from "./screens/NewIdea";
import Idea from "./screens/Idea";
import Ideas from "./screens/Ideas";
import EditIdea from "./screens/EditIdea";

import { authOnly, noAuth } from "./protect";

export default [
  authOnly({
    name: "Home",
    path: "",
    response() {
      return {
        body: Home
      };
    }
  }),
  noAuth({
    name: "Sign In",
    path: "sign-in",
    response() {
      return {
        body: SignIn
      };
    }
  }),
  authOnly({
    name: "Profile",
    path: "profile",
    response() {
      return {
        body: Profile
      };
    }
  }),
  authOnly({
    name: "New Idea",
    path: "new-idea",
    response() {
      return {
        body: NewIdea
      };
    }
  }),
  authOnly({
    name: "Idea",
    path: "idea/:id",
    response() {
      return {
        body: Idea
      };
    },
    children: [
      authOnly({
        name: "Edit Idea",
        path: "edit",
        response() {
          return {
            body: EditIdea
          }
        }
      })
    ]
  }),
  authOnly({
    name: "Ideas",
    path: "ideas",
    response() {
      return {
        body: Ideas
      };
    }
  }),
];
