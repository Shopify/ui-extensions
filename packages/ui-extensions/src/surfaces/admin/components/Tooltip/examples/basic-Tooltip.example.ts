import {Button, extend, Tooltip, Text} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const button = root.createComponent(Button, {
    interestTarget: "tooltip-1"
  }, 'Tooltip 1');
  const tooltip = root.createComponent(Tooltip, {
    id: 'tooltip-1',
  }, 
    root.createComponent(Text, {}, 'Tooltip Content'),
  );

  root.appendChild(button);
  root.appendChild(tooltip);
  root.mount();
});