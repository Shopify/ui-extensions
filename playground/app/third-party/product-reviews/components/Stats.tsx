import React from 'react';
import {Card, Stack, Text} from '@shopify/app-extensions-polaris-components/dist/client';

interface Props {
  statistics: StatItem[];
}

type StatItem = {
  title: string;
  value: number | string;
};

function StatBlock({value, title}: StatItem) {
  return (
    <Stack vertical>
      <Text alignment="center" size="titleLarge">
        {value}
      </Text>
      <Text alignment="center">{title}</Text>
    </Stack>
  );
}

export default function Stats({statistics}: Props) {
  return (
    <Card sectioned>
      <Stack distribution="fillEvenly">
        {statistics.map(({title, value}: StatItem) => (
          <StatBlock key={title} title={title} value={value} />
        ))}
      </Stack>
    </Card>
  );
}
