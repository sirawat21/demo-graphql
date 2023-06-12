import { createServer } from 'http';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const startServer = async () => {
  const PORT = 3300;
  const app = express();
  const httpServer = createServer(app);

  // Creating Schema
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // Response typeDef handler
  const resolvers = {
    Query: {
      hello: () => 'Hello world'
    }
  };

  // Creating Apollo Server; passing typeDef, resolver
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/api'
  });

  httpServer.listen({ port: PORT }, () => {
    console.log(`Service Listenning: localhost:${PORT}`);
  });
};

startServer();
