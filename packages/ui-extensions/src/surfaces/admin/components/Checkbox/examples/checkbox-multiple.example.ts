import {extension, Checkbox, Button, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    const channels = {online: true, pos: false, wholesale: false};

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Publish to channels',
    );

    const onlineCheckbox = root.createComponent(Checkbox, {
      label: 'Online Store',
      checked: channels.online,
      onChange: (value) => { channels.online = value; },
    });

    const posCheckbox = root.createComponent(Checkbox, {
      label: 'Point of Sale',
      checked: channels.pos,
      onChange: (value) => { channels.pos = value; },
    });

    const wholesaleCheckbox = root.createComponent(Checkbox, {
      label: 'Wholesale',
      checked: channels.wholesale,
      onChange: (value) => { channels.wholesale = value; },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          await fetch('/api/products/channels', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, channels}),
          });
          close();
        },
      },
      'Update channels',
    );

    stack.appendChild(heading);
    stack.appendChild(onlineCheckbox);
    stack.appendChild(posCheckbox);
    stack.appendChild(wholesaleCheckbox);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
