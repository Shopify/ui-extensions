import {extension, Icon} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  const icon = root.createComponent(Icon, {
    source: 'cancelSmallMinor',
  });

  icon.appendChild('This is the best extension.');
  root.appendChild(icon);

  root.mount();
});
