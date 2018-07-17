import { isLoggedIn } from "./auth";

export function authOnly(route) {
  return {
    ...route,
    match: {
      ...route.match,
      isLoggedIn
    },
    response: info => {
      if (!info.resolved.isLoggedIn) {
        return {
          redirectTo: {
            name: "Sign In"
          }
        };
      }
      return route.response && route.response(info);
    }
  }
}

export function noAuth(route) {
  return {
    ...route,
    match: {
      ...route.match,
      isLoggedIn
    },
    response: info => {
      if (info.resolved.isLoggedIn) {
        return {
          redirectTo: {
            name: "Home"
          }
        };
      }
      return route.response && route.response(info);
    }
  }
}
