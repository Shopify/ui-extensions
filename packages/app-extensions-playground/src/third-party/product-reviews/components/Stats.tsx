import React from 'react';
import {Card, Stack, Text} from '@shopify/app-extensions-polaris-components/client';
import {Stat} from './../types';

interface Props {
  statistics: Stat[];
}

function StatBlock({value, title, icon}: Stat) {
  return (
    <Stack vertical>
      <Stack distribution="center" alignment="center" spacing="tight">
        {icon && icon}
        <Text alignment="center" size="titleLarge">
          {value}
        </Text>
      </Stack>
      <Text alignment="center">{title}</Text>
    </Stack>
  );
}

export default function Stats({statistics}: Props) {
  return (
    <Card sectioned>
      <Stack distribution="fill">
        {statistics.map((statProps: Stat) => (
          <StatBlock key={statProps.title} {...statProps} />
        ))}
      </Stack>
    </Card>
  );
}
