import {extend, Select} from '@shopify/argo-admin';

const options = [
  {
    label: 'Cool option',
    value: 'cool-option',
  },
  {
    label: 'Cooler option',
    value: 'cooler-option',
  },
  {
    label: 'Coolest option',
    value: 'coolest-option',
  },
];

extend('Playground', (root) => {
  const select = root.createComponent(Select, {
    label: 'Select an option',
    options,
    labelInline: true,
    onChange: (value) => console.log(value, 'was selected'),
    value: 'cooler-option',
  });

  root.appendChild(select);

  root.mount();
});
