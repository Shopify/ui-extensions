import React, {useEffect, useMemo, useState} from 'react';
import {
  Checkbox,
  ExtensionPoint,
  ResourceItem,
  ResourceList,
  Stack,
  StackItem,
  Text,
} from '@shopify/argo';
import {render, useContainer, useData, useToast} from '@shopify/argo/react';

function EditSubscription() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);

  const container = useContainer();

  const {show: showToast} = useToast();

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
        setListItems(dataList);
      },
    }),
    [resourceListQuery, dataList],
  );

  useEffect(() => {
    const {close, done, setPrimaryAction, setSecondaryAction} = container;
    setPrimaryAction({
      content: 'Next',
      onAction: () => {
        showToast('Success');
        done();
        close();
      },
    });

    setSecondaryAction({
      content: 'Back',
      onAction: () => {
        showToast('Cancelled', {error: true});
        close();
      },
    });
  }, [container, showToast]);

  return (
    <>
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
    </>
  );
}

function RemoveSubscription() {
  const {productId} = useData<ExtensionPoint.SubscriptionManagementRemove>();

  const container = useContainer();

  const {show: showToast} = useToast();

  useEffect(() => {
    const {close, done, setPrimaryAction, setSecondaryAction} = container;
    setPrimaryAction({
      content: 'Yes',
      onAction: () => {
        showToast('Removed');
        done();
        close();
      },
    });

    setSecondaryAction({
      content: 'No',
      onAction: () => {
        showToast('Cancelled', {error: true});
        close();
      },
    });
  }, [container, showToast]);

  return (
    <>
      <Stack distribution="center">
        <Text size="titleMedium">{`Remove cool thing from product with Id: ${productId}`}</Text>
      </Stack>
    </>
  );
}

render(ExtensionPoint.SubscriptionManagementEdit, () => <EditSubscription />);
render(ExtensionPoint.SubscriptionManagementRemove, () => <RemoveSubscription />);
