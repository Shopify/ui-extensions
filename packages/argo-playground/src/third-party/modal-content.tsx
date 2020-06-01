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
import {render, useModalActions, useProductData, useToast} from '@shopify/argo/react';

function EditSubscription() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);
  const [primaryActionText, setPrimaryActionText] = useState('');
  const [secondaryActionText, setSecondaryActionText] = useState('');

  const {
    primaryAction: {setContent: setPrimaryContent, setAction: setPrimaryAction},
    secondaryAction: {setContent: setSecondaryContent, setAction: setSecondaryAction},
    closeModal,
  } = useModalActions();

  const {show: showToast} = useToast();

  const [resourceListQuery, setResourceListQuery] = useState('');
  const resourceListFilterControl = useMemo(
    () => ({
      queryValue: resourceListQuery,
      queryPlaceholder: 'Search...',
      onQueryChange: q => {
        setResourceListQuery(q);
        setListItems(dataList.filter(r => r.toString().includes(q)));
      },
      onQueryClear: () => {
        setResourceListQuery('');
        setListItems(dataList);
      },
    }),
    [resourceListQuery, dataList],
  );

  useEffect(() => {
    setPrimaryActionText('Next');
    setSecondaryActionText('Back');

    setPrimaryAction(() => {
      showToast('Success');
      closeModal();
    });
    setSecondaryAction(() => {
      showToast('Cancelled', {error: true});
      closeModal();
    });
  }, [closeModal, setPrimaryAction, setSecondaryAction, showToast]);

  setPrimaryContent(primaryActionText);
  setSecondaryContent(secondaryActionText);

  return (
    <>
      <ResourceList filterControl={resourceListFilterControl}>
        {listItems.map((item, index) => (
          <ResourceItem
            key={index}
            id={index}
            onClick={() => {
              console.log('ResourceList item toggle:', item);
              if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter(o => o !== item));
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
  const {productId} = useProductData();

  const {
    primaryAction: {setContent: setPrimaryContent, setAction: setPrimaryAction},
    secondaryAction: {setContent: setSecondaryContent, setAction: setSecondaryAction},
    closeModal,
  } = useModalActions();

  setPrimaryContent('Yes');
  setSecondaryContent('No');
  setPrimaryAction(() => closeModal());
  setSecondaryAction(() => closeModal());

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
