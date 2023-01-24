import {extension, ExtensionPoint, Checkbox} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const checkbox = root.createComponent(Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: () => console.log('Checked'),
  });

  root.appendChild(checkbox);

  root.mount();
});
