import React from 'react';

import {
  Text,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.drawer-details.action.render'>();
  return (
    <Navigator>
      <Screen name="DrawerDetails" title="Drawer Details">
        <ScrollView>
          <Text>{`Drawer ID: ${api.drawer.id}`}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.drawer-details.action.render', () => (
  <Modal />
));
