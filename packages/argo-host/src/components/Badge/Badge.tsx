import React from 'react';
import {BadgeProps} from '@shopify/argo/components';
import {Badge as PolarisBadge} from '@shopify/polaris';

export default function Badge({status, message}: BadgeProps) {
  return <PolarisBadge status={status}>{message}</PolarisBadge>;
}
