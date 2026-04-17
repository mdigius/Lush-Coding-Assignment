import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { schema } from './schema/index';
import { createContext } from './context';

const yoga = createYoga({
  schema,
  context: createContext,
});

const server = createServer(yoga);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});