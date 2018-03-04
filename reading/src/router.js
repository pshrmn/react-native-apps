import InMemory from '@hickory/in-memory';
import curi from '@curi/core';

import routes from './routes';

const history = InMemory();

export default curi(history, routes);
