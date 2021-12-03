import { extend, Text, Banner } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var banner = root.createComponent(Banner, {
    action: {
      onAction: function onAction() {
        return console.log('Pressed the action');
      },
      content: 'Press me'
    },
    status: 'warning',
    title: 'This is a warning',
    onDismiss: function onDismiss() {
      return console.log('Closed');
    }
  });
  var bannerText = root.createComponent(Text);
  bannerText.appendChild('Here is the warning.');
  banner.appendChild(bannerText);
  root.appendChild(banner);
  root.mount();
});