import gql from 'graphql-tag';

const ProductWithReviews = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      remoteId
      shopId
      title
      imageUrl
      averageReviewRating
      flaggedReviewsCount
      publishedReviewsCount
      pendingReviewsCount
      reviewsCount
      reviews {
        id
        productId
        rating
        shopId
        title
        body
        author
        state
        createdAt
      }
    }
  }
`;

export default ProductWithReviews;
