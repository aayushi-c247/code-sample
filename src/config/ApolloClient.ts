import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppConfig } from './AppConfig';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: AppConfig.GRAPHQL_ENDPOINT,
});

export const client: any = new ApolloClient({
  cache,
  link,
});
