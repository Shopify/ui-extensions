import React from 'react';
import {
  Banner,
  ScrollView,
  Screen,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  return (
    <Screen title="Home" name="Home">
      <ScrollView>
        <Banner
          title="Information Banner"
          variant="information"
          action="Ok"
          visible
        />
        <Banner
          title="Confirmation Banner"
          variant="confirmation"
          visible
        />
        <Banner
          title="Alert Banner"
          variant="alert"
          visible
        />
        <Banner
          title="Error Banner"
          variant="error"
          visible
        />
      </ScrollView>
    </Screen>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <SmartGridModal />,
);
