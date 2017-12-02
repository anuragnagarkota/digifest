import { ApolloClient, createNetworkInterface } from 'react-apollo';
const networkInterface = createNetworkInterface({
  uri: 'http://127.0.0.1:8080/graphql'  
});
const client = new ApolloClient({
  networkInterface: networkInterface
});
export default client;
