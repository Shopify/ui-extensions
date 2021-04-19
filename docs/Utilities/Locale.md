# Locale

Access the merchant’s current locale (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)) to internationalize your extension content.

## Implementation

#### Vanilla

```js
import {ExtensionPoint, render, Text} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root, api) => {
  const {locale} = api;

  const text = root.createComponent(Text, {
    children: `My current locale is: ${locale.initialValue}`,
  });

  locale.setOnChange((newLocale) => {
    text.updateProps({
      children: `My current locale is: ${newLocale}`,
    });
  });

  root.appendChild(text);
  root.mount();
});
```

#### React

```js
import {ExtensionPoint, Text} from '@shopify/argo-admin';
import {render, useLocale} from '@shopify/argo-admin/react';

function App() {
  const locale = useLocale();

  return <Text>{`My current locale is: ${locale}`}</Text>;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Locale API

| Name   | Type     | Description                                                | Required |
| ------ | -------- | ---------------------------------------------------------- | -------- |
| locale | `string` | Merchant’s current locale, ie `fr-CA` for French - Canada. |          |
