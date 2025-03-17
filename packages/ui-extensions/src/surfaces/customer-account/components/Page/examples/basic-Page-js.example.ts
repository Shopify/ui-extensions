import {
  Page,
  Button,
  extension
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  (root, api) => {
    renderApp(root, api);
  },
)

async function renderApp(root, api) {
  const primaryAction = root.createFragment();
  await primaryAction.append(
    root.createComponent(
      Button,
      {
        onPress: () => {
          console.log('Secondary action 1');
        },
      },
      'Secondary action 1',
    ),
  );
  const secondaryActions = root.createFragment();
  await secondaryActions.append(
    root.createComponent(
      Button,
      {
        onPress: () => {
          console.log('secondary action 2');
        },
      },
      'Secondary action 2',
    ),
  );
  await secondaryActions.append(
    root.createComponent(
      Button,
      {
        onPress: () => {
          console.log('secondary action 3');
        },
      },
      'Secondary action 3',
    ),
  );

  const breadcrumbActions = root.createFragment();
  await breadcrumbActions.append(
    root.createComponent(Button, {
      accessibilityLabel: 'Button',
      onPress: () => {},
    }),
  );

  const page = root.createComponent(
    Page,
    {
      heading: 'Order #1411',
      subheading: 'Confirmed Oct 5',
      primaryAction,
      secondaryActions,
      breadcrumbActions,
    },
    root.createComponent('View', {}, 'Content'),
  );
  root.append(page);
}
