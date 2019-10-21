import React from 'react';
import {Badge as PolarisBadge, BadgeProps} from '@shopify/polaris';

type ScarletBadge = {
  label: string;
}

type CombinedProps = BadgeProps & ScarletBadge;

export default function Badge({label, ...props}: CombinedProps) {

  return <PolarisBadge {...props}>{label}</PolarisBadge>
}
