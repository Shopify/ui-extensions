# Banner

Informs merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way. Banners are placed at the top of the page, section or card they apply to, and below the relevant header if one exists.

## Examples

#### Vanilla

```js
  import {extend, ExtensionPoint, Banner} from '@shopify/argo-admin';

  extend('Admin::Product::SubscriptionPlan::Add', (root) => {
    const banner = root.createComponent(Banner, {
      action:  {
        onAction: () => console.log('Pressed the action'),
        content: 'Press me';
      };
      status: 'warning';
      title: 'This is a warning';
      onDismiss: () => console.log('Closed');
    });

    const bannerText = root.createComponent(Text, {
      children: 'Here is the warning.'
    });
    banner.appendChild(bannerText);
    root.appendChild(banner);

    root.mount();
  });
```

#### React

```jsx
import {extend, render, ExtensionPoint, Banner} from '@shopify/argo-admin-react';

function App() {
  return (
    <Banner
      action={{
        onAction: () => console.log('Pressed the action');
        content: 'Press me';
      }}
      status="warning"
      title="This is a warning"
      onDismiss={() => console.log('Closed')}
    >
      Here is the warning.
    </Banner>
  )
}

extend('Admin::Product::SubscriptionPlan::Add', render(() => <App />));
```

## Props API

| Name      | Type                                             | Description                            | Required |
| --------- | ------------------------------------------------ | -------------------------------------- | -------- |
| action    | `BannerAction`                                   | Button to display at bottom of banner. |          |
| status    | `'success'`, `'info'`, `'warning'`, `'critical'` | Colour of the banner.                  |          |
| title     | `string`                                         | Title of the banner.                   |          |
| onDismiss | `() => void`                                     | Callback when banner is dismissed.     | ☑️       |

### BannerAction

| Name     | Type         | Description                          | Required |
| -------- | ------------ | ------------------------------------ | -------- |
| onAction | `() => void` | Callback when the button is pressed. | ☑️       |
| content  | `string`     | Button label text.                   | ☑️       |
