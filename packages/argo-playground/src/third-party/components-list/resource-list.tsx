import React, {useState, useMemo} from 'react';
import {Card, ResourceList, ResourceItem, Stack, Checkbox, StackItem, Text} from '@shopify/argo';

export function ResourceListExample() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);

  const [resourceListQuery, setResourceListQuery] = useState('');
  const resourceListFilterControl = useMemo(
    () => ({
      queryValue: resourceListQuery,
      queryPlaceholder: 'Search...',
      onQueryChange: (q) => {
        setResourceListQuery(q);
        setListItems(dataList.filter((r) => r.toString().includes(q)));
      },
      onQueryClear: () => {
        setResourceListQuery('');
      },
    }),
    [resourceListQuery, dataList],
  );

  return (
    <Card title="ResourceList component">
      <ResourceList filterControl={resourceListFilterControl}>
        {listItems.map((item, index) => (
          <ResourceItem
            key={index}
            id={`${index}`}
            onClick={() => {
              console.log('ResourceList item toggle:', item);
              if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter((o) => o !== item));
              } else {
                setSelectedItems(selectedItems.concat(item));
              }
            }}
          >
            <Stack alignment="center">
              <Checkbox checked={selectedItems.includes(item)} />
              <StackItem fill>Every {item} week or 15 days * 20-25% off</StackItem>
              <Text>{item} product</Text>
            </Stack>
          </ResourceItem>
        ))}
      </ResourceList>
    </Card>
  );
}
