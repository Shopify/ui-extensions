import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Screen,
  Text,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const {currentSession, getSessionToken} =
    useApi<'pos.home.modal.render'>().session;

  const {shopId, userId, locationId, staffMemberId} = currentSession;
  const [sessionToken, setSessionToken] = useState<string>();

  getSessionToken().then((newToken) => {
    setSessionToken(newToken);
  });

  return (
    <Screen name="ScreenOne" title="Screen One Title">
      <Text>
        shopId: {shopId}, userId: {userId}, locationId: {locationId}, staffId:
        {staffMemberId}
      </Text>
      <Text>sessionToken: {sessionToken}</Text>
    </Screen>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
