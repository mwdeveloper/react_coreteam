import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { resolvers, typeDefs } from './resolvers';
import { default as data } from './initial-data';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:3000',
  resolvers,
  typeDefs
});

const GET_MORTGAGES = gql`
  {
    mortgages @client
  }
`;

client.writeQuery({
  query: GET_MORTGAGES,
  data: data
})

export default client;
