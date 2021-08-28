import { SubscriptionClient } from 'subscriptions-transport-ws';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
} from 'relay-runtime';
import { MY_LOCAL_IP } from '../config.json';

const GRAPHQL_QUERY_URL = `http://${MY_LOCAL_IP}:4000/graphql`;
const GRAPHQL_SUBSCRIPTION_URL = `ws://${MY_LOCAL_IP}:4000/graphql`;

async function fetchQuery(operation, variables) {
  return fetch(GRAPHQL_QUERY_URL, {
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(response => {
    return response.json();
  });
}

const subscriptionClient = new SubscriptionClient(GRAPHQL_SUBSCRIPTION_URL, {
  reconnect: true,
});

const subscribe = (request, variables) => {
  const subscribeObservable = subscriptionClient.request({
    query: request.text,
    operationName: request.name,
    variables,
  });
  return Observable.from(subscribeObservable);
};

export const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource()),
});
