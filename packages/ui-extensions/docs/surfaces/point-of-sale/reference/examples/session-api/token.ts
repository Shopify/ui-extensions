import {
  Screen,
  Stack,
  Text,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  const {session} = api;
  const {currentSession, getSessionToken} = session;
  const {shopId, userId, locationId, staffMemberId} = currentSession;

  const screen = root.createComponent(Screen, {
    name: 'ScreenOne',
    title: 'Screen One Title',
  });

  const currentSessionText = root.createComponent(
    Text,
    {},
    `shopId: ${shopId}, userId: ${userId}, locationId: ${locationId}, staffId: ${staffMemberId}`,
  );
  const sessionTokenText = root.createComponent(
    Text,
    {},
    'sessionToken: undefined',
  );

  getSessionToken().then((newToken) => {
    sessionTokenText.children.forEach((child) => {
      sessionTokenText.removeChild(child);
    });
    sessionTokenText.appendChild(`sessionToken: ${newToken}`);
  });

  screen.appendChild(currentSessionText);
  screen.appendChild(sessionTokenText);
  root.appendChild(screen);
});
