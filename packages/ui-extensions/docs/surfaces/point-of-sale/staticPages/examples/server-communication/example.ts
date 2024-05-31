import {extension, Navigator} from '@shopify/ui-extensions/point-of-sale';
import BASE_URL from '../config.js';

export default extension('pos.home.modal.render', (root, api) => {
  const tokenText = root.createComponent(Text);
  const authenticatedText = root.createComponent(Text);
  const errorText = root.createComponent(Text);

  const screen = root.createComponent(Screen, {title: 'Home', name: 'Home'});
  screen.append(tokenText);
  screen.append(authenticatedText);
  screen.append(errorText);

  const navigator = root.createComponent(Navigator);
  navigator.append(screen);
  root.append(navigator);

  api.session.getSessionToken().then((token: string) => {
    tokenText.replaceChild(`Token: ${token}`);
    fetch(`https://${BASE_URL}/api/get_customers`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        authenticatedText.replaceChild(`Authenticated: ${response.status}`);
      })
      .catch((error) => {
        if (error) {
          errorText.replaceChild(`Error: ${error}`);
        }
      });
  });
});
