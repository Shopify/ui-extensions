import React, {useState, useMemo} from 'react';
import {
  Card,
  ResourceList,
  ResourceItem,
  Stack,
  Checkbox,
  StackItem,
  Text,
} from '@shopify/argo-admin-react';

export function ResourceListExample() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);

  const [resourceListQuery, setResourceListQuery] = useState('');
  const resourceListFilterControl = useMemo(
    () => ({
      queryValue: resourceListQuery,
      queryPlaceholder: 'Search...',
      onQueryChange: (query) => {
        setResourceListQuery(query);
        setListItems(
          dataList.filter((item) => item.toString().includes(query)),
        );
      },
      onQueryClear: () => {
        setResourceListQuery('');
        setListItems(dataList);
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
            onPress={() => {
              console.log('ResourceList item toggle:', item);
              if (selectedItems.includes(item)) {
                setSelectedItems(
                  selectedItems.filter((_item) => _item !== item),
                );
              } else {
                setSelectedItems(selectedItems.concat(item));
              }
            }}
          >
            <Stack alignment="center">
              <Checkbox checked={selectedItems.includes(item)} />
              <StackItem fill>
                Every {item} week or 15 days * 20-25% off
              </StackItem>
              <Text>{item} product</Text>
            </Stack>
          </ResourceItem>
        ))}
      </ResourceList>
    </Card>
  );
}
