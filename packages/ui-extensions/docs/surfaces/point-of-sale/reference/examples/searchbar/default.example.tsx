import React from 'react';
import {
  reactExtension,
  Text,
  Screen,
  SearchBar,
  ScrollView,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [searched, setSearched] =
    React.useState('');

  return (
    <Screen name="SearchBar" title="SearchBar">
      <ScrollView>
        <SearchBar
          onSearch={setSearched}
          editable
          initialValue="initial value"
          placeholder="placeholder"
        />
        <Text>Searched: {searched}</Text>
      </ScrollView>
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => {
    return <SmartGridModal />;
  },
);
