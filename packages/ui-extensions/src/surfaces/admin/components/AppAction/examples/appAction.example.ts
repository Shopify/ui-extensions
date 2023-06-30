import {extension, AppAction, Button} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const appAction = root.createComponent(AppAction, {
    title: 'My App Action',
    primaryAction: root.createFragment(
      root.createComponent(Button, {onPress: () => {}}, 'Action')
    ),
    secondaryAction: root.createFragment(
      root.createComponent(Button, {onPress: () => {}}, 'Secondary')
    )
  }, 'Modal content');

  root.appendChild(appAction);
  root.mount();
});
