import { useMemo } from 'react';
import { graphql, useLazyLoadQuery, useSubscription } from 'react-relay';
import { useRelayQuery as IUseRelayQuery } from './__generated__/useRelayQuery.graphql';

interface IUseRelayR {
  data: readonly {
    readonly x: number | null;
    readonly y: number | null;
  }[];
}

export const useRelay = (): IUseRelayR => {
  const graphqlQuery = graphql`
    query useRelayQuery {
      chartData {
        x
        y
      }
    }
  `;

  const graphqlSubscription = graphql`
    subscription useRelaySubscription {
      chartData {
        x
        y
      }
    }
  `;

  const { chartData: data } = useLazyLoadQuery<IUseRelayQuery>(
    graphqlQuery,
    {}, // for variables - there are no variables in our example
    { fetchPolicy: 'store-or-network' },
  );

  // IMPORTANT: your config should be memoized.
  // Otherwise, useSubscription will re-render too frequently.
  const config = useMemo(
    () => ({
      variables: {},
      subscription: graphqlSubscription,
    }),
    [graphqlSubscription],
  );

  useSubscription(config);

  return { data };
};
