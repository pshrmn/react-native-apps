import InMemory from "@hickory/in-memory";
import { curi } from "@curi/router";
import { BackHandler } from 'react-native';

import routes from "./routes";

const history = InMemory();
const router = curi(history, routes, {
  emitRedirects: false
});

BackHandler.addEventListener(
  "hardwareBackPress",
  () => {
    // close the app when pressing back button
    // while on the initial screen
    if (router.history.index === 0) {
      return false;
    }
    router.history.go(-1);
    return true;
  }
);

export default router;
