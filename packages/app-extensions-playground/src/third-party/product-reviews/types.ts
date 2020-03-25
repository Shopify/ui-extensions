export interface Stat {
  title: string;
  value?: number;
}

export type ID = string | number;

export type Rating = 1 | 2 | 3 | 4 | 5;

export enum ReviewStatus {
  PUBLISHED = 'PUBLISHED',
  SPAM = 'SPAM',
  APPROVED = 'APPROVED',
  REDACTED = 'REDACTED',
  PENDING = 'PENDING',
}

export interface Payload {
  id?: ID;
  remoteId?: ID;
  shopId?: ID;
  title?: string;
  imageUrl?: string;
  averageReviewRating?: number;
  flaggedReviewsCount?: number;
  publishedReviewsCount?: number;
  pendingReviewsCount?: number;
  reviewsCount?: number;
  reviews?: Review[];
}

export interface Review {
  id: ID;
  productId: ID;
  rating: Rating;
  shopId: ID;
  title: string;
  body: string;
  author: string;
  state: ReviewStatus;
  createdAt: string;
}
