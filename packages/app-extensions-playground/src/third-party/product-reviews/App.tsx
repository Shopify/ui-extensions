import React, {useState} from 'react';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@shopify/react-graphql';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink, concat} from 'apollo-link';

import {InMemoryCache} from 'apollo-cache-inmemory';
import {ReviewList} from './pages';

enum Page {
  NoReviews = 'no-reviews',
  Review = 'review',
  ReviewList = 'review-list',
}

const BACKEND_API_ENDPOINT = 'https://product-reviews.myshopify.io/graphql';
const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wIjoic2hvcDEubXlzaG9waWZ5LmlvIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.DPRpE9-UGNOFtgJV72KfqCfSIde0WW-0snwErCK3mHg';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: TOKEN,
    },
  });

  return forward(operation);
});
const httpLink = new HttpLink({uri: BACKEND_API_ENDPOINT});
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
});

export function PageContainer() {
  const [, setPage] = useState<Page>();
  const [, setReviewId] = useState();

  const onReviewSelect = (id: string) => {
    setPage(Page.Review);
    setReviewId(id);
  };

  return <ReviewList reviews={[]} onReviewSelect={onReviewSelect} />;
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PageContainer />
    </ApolloProvider>
  );
}
