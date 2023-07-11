import {extension, AdminAction, Button} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const adminAction = root.createComponent(AdminAction, {
    title: 'My App Action',
    primaryAction: root.createFragment(
      root.createComponent(Button, {onPress: () => {}}, 'Action')
    ),
    secondaryAction: root.createFragment(
      root.createComponent(Button, {onPress: () => {}}, 'Secondary')
    )
  }, 'Modal content');

  root.appendChild(adminAction);
  root.mount();
});
