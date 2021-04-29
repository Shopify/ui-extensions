import {extend, Text, Banner} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const banner = root.createComponent(Banner, {
    action: {
      onAction: () => console.log('Pressed the action'),
      content: 'Press me',
    },
    status: 'warning',
    title: 'This is a warning',
    onDismiss: () => console.log('Closed'),
  });

  const bannerText = root.createComponent(Text);
  bannerText.appendChild('Here is the warning.');
  banner.appendChild(bannerText);
  root.appendChild(banner);

  root.mount();
});
