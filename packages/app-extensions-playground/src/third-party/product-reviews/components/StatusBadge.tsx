import React from 'react';
import {Badge} from '@shopify/app-extensions-polaris-components/client';
import {ReviewStatus} from '../types';

type Status = 'info' | 'warning' | 'attention' | 'success' | 'new' | undefined;
type BadgeData = {
  content: string;
  status: Status;
};
type StateMap = {[key: string]: BadgeData};

const stateMap: StateMap = {
  [ReviewStatus.APPROVED]: {
    content: 'Approved',
    status: 'info',
  },
  [ReviewStatus.SPAM]: {
    content: 'Spam',
    status: 'warning',
  },
  [ReviewStatus.PENDING]: {
    content: 'Pending',
    status: 'attention',
  },
  [ReviewStatus.REDACTED]: {
    content: 'Redacted',
    status: 'warning',
  },
  [ReviewStatus.PUBLISHED]: {
    content: 'Published',
    status: 'success',
  },
};

export default function StatusBadge({reviewStatus}: {reviewStatus: ReviewStatus}) {
  const {content, status} = stateMap[reviewStatus];
  return <Badge message={content} status={status} />;
}
