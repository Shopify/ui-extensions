import React from 'react';
import {List as PolarisList, ListProps} from '@shopify/polaris';

type ScarletListProps = ListProps & {items: React.ReactNode[]};

export default function List({items = [], ...props}: ScarletListProps) {
  return (
    <PolarisList {...props}>
      {items.map(item => (
        <PolarisList.Item>{item}</PolarisList.Item>
      ))}
    </PolarisList>
  );
}
