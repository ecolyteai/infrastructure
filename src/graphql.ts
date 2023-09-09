
import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express, { Express } from 'express';
import http from 'http';
import { buildTypeDefsAndResolvers } from 'type-graphql';
import cors from 'cors';
import { json } from 'body-parser';
import { appResolver } from './resolvers';
import router from './router';
const app: Express = express();

const httpServer: any = http.createServer(app);

async function setupServerGraphql() {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [appResolver],
    emitSchemaFile: true
  });

  const server = new ApolloServer<any>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),

    json(),

    expressMiddleware(server, {
      context: async ({ req }) => ({ req })
    })
  );
}
app.use(router);

setupServerGraphql();
export { httpServer, app };
