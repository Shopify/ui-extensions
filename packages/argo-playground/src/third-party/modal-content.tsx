import React, {useState, useMemo, useEffect} from 'react';
import {ExtensionPoint} from '@shopify/argo';
import {render, useModalActions, useProductData, useToast} from '@shopify/argo-react';
import {
  ResourceList,
  ResourceItem,
  Stack,
  Checkbox,
  Text,
  StackItem,
} from '@shopify/argo-react/components';

function App() {
  const dataList = [1, 2, 3, 4, 5, 12, 13, 145];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [listItems, setListItems] = useState(dataList);
  const {productId, action} = useProductData();
  const [primaryActionText, setPrimaryActionText] = useState('');
  const [secondaryActionText, setSecondaryActionText] = useState('');

  const {
    primaryAction: {setContent: setPrimaryContent, setAction: setPrimaryAction},
    secondaryAction: {setContent: setSecondaryContent, setAction: setSecondaryAction},
    closeModal,
  } = useModalActions();

  useEffect(() => {
    switch (action) {
      case 'edit':
        setPrimaryActionText('Next');
        setSecondaryActionText('Back');
        break;
      case 'remove':
        setPrimaryActionText('Yes');
        setSecondaryActionText('No');
        break;
    }
  }, [action]);

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

  setPrimaryContent(primaryActionText);
  setSecondaryContent(secondaryActionText);
  setPrimaryAction(() => {
    showToast('Success');
    closeModal();
  });
  setSecondaryAction(() => {
    showToast('Cancelled', {error: true});
    closeModal();
  });

  const renderList = () => (
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

  const renderRemove = () => (
    <>
      <Stack distribution="center">
        <Text size="titleMedium">{`Remove cool thing from product with Id: ${productId}`}</Text>
      </Stack>
    </>
  );

  switch (action) {
    case 'edit':
      return renderList();
    case 'remove':
      return renderRemove();
    default:
      return <Text>No action provided</Text>;
  }
}

render(ExtensionPoint.SubscriptionsManagement, () => <App />);
