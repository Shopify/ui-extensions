# Banner

Banners inform merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way. [Learn more about best practices and guidelines on using Banners](https://polaris.shopify.com/components/feedback-indicators/banner#section-best-practices).

## Behavior

- 📱 Do not nest other components other than Text. They will not be rendered. Use nested Text to render text content within the Banner.
- 📱 Do not nest banners inside horizontal Stacks, Pressables, ResourceItems, Cards, or CardSections. This will result in unintended behavior.

| ✅ Do                                                         | 🛑 Don't                         |
| ------------------------------------------------------------- | -------------------------------- |
| Place Banners at the top of the page or section they apply to | Use too many Banners at one time |
| Use status to provide additional context to the merchant      |                                  |

For more guidelines, refer to Polaris' [Banner best practices](https://polaris.shopify.com/components/feedback-indicators/banner#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
  import {extend, ExtensionPoint, Banner} from '@shopify/argo-admin';

  extend('Playground', (root) => {
    const banner = root.createComponent(Banner, {
      action:  {
        onAction: () => console.log('Pressed the action'),
        content: 'Press me',
      },
      status: 'warning',
      title: 'This is a warning',
      onDismiss: () => console.log('Closed')
    });

    const bannerText = root.createComponent(Text, {
      children: 'Here is the warning.'
    });
    banner.appendChild(bannerText);
    root.appendChild(banner);

    root.mount();
  });
```

#### React example

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

extend('Playground', render(() => <App />));
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
