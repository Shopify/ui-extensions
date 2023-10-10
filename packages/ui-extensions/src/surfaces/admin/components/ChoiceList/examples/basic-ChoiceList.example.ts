import {
  extension,
  ChoiceList,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const blockStack = root.createComponent(
      ChoiceList,
      {
        title: 'Company name',
        choices: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Optional', value: 'optional'},
            {label: 'Required', value: 'required'},
        ]
      },
    );

    root.appendChild(blockStack);
  },
);
