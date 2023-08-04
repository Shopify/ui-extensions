# `@shopify/ui-extensions-react`

This package contains the public type definitions and utilities needed to create a Shopify UI extension with [React](https://reactjs.org/). It includes UI extension APIs for the following Shopify-controlled surfaces:

- [`checkout`](./src/surfaces/checkout): the checkout surface is the area of Shopify where buyers complete their purchase. This includes the information, shipping, payment, and thank you pages.
- [`customer-account`](./src/surfaces/customer-account): the customer account surface is the area of Shopify where buyers can manage their account information, view their order history, and more.
- [`admin`](./src/surfaces/admin): the admin surface is the area of Shopify where merchants manage their store. This includes products, orders, customers, and settings pages.

> **Is your extension currently using `@shopify/checkout-ui-extensions-react`?** You can learn what you need to do to upgrade to this API versioned package in the [migration guide](https://github.com/Shopify/ui-extensions/discussions/1161).

All extensions, regardless of where they appear in Shopify, make use the same [underlying technology](../../documentation/how-extensions-work.md), and most of the same “core” UI components and capabilities. Separating APIs by surface makes it easier for a developer to see what is available to them in each context, and gives us a flexible system for introducing components and APIs available in only some areas of Shopify.

A checkout extension using React would be written as follows:

```tsx
import {useState} from 'react';
import {
  useApi,
  useTranslate,
  TextField,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <GiftNote />
));

function GiftNote() {
  const translate = useTranslate();
  const {metafields, applyMetafieldChange} = useApi();

  const [value, setValue] = useState(() => {
    const metafield = metafields.current.find(
      (metafield) =>
        metafield.namespace === 'custom' && metafield.key === 'gift_note',
    );

    return metafield?.value ?? '';
  });

  return (
    <TextField
      label={translate('gift_note.label')}
      value={value}
      onChange={(value) => {
        setValue(value);
        applyMetafieldChange({
          namespace: 'custom',
          key: 'gift_note',
          value,
          valueType: 'string',
        });
      }}
    />
  );
}
```
