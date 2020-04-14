import React, {useState, useMemo} from 'react';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@shopify/react-graphql';
import {HttpLink} from 'apollo-link-http';
import {concat} from 'apollo-link';
import {setContext} from 'apollo-link-context';

import {InMemoryCache} from 'apollo-cache-inmemory';
import {ReviewList} from './pages';
import {useSessionToken} from '@shopify/app-extensions-renderer';

enum Page {
  NoReviews = 'no-reviews',
  Review = 'review',
  ReviewList = 'review-list',
}

const BACKEND_API_ENDPOINT = 'https://product-reviews.myshopify.io/graphql';

export function PageContainer() {
  const [, setPage] = useState<Page>();
  const [, setReviewId] = useState();

  const onReviewSelect = (id: string) => {
    setPage(Page.Review);
    setReviewId(id);
  };

  return <ReviewList reviews={[]} onReviewSelect={onReviewSelect} />;
}

const useClient = () => {
  const {getSessionToken} = useSessionToken();
  return useMemo(() => {
    const authLink = setContext((_, context) => {
      const {headers} = context;
      return getSessionToken()
        .catch(() => 'unknown token')
        .then(token => ({
          ...context,
          headers: {
            ...headers,
            authorization: token,
          },
        }));
    });
    const httpLink = new HttpLink({uri: BACKEND_API_ENDPOINT});
    const cache = new InMemoryCache();
    const client = new ApolloClient({
      link: concat(authLink, httpLink),
      cache,
    });
    return client;
  }, [getSessionToken]);
};

export default function App() {
  const client = useClient();
  return (
    <ApolloProvider client={client}>
      <PageContainer />
    </ApolloProvider>
  );
}
