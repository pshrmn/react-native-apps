import InMemory from "@hickory/in-memory";
import curi from "@curi/router";

import routes from "./routes";

const history = InMemory();
const router = curi(history, routes, {
  emitRedirects: false
});

export default router;
