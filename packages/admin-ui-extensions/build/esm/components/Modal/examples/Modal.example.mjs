import { extend, Modal } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var modal = root.createComponent(Modal, {
    title: 'The best modal',
    onClose: function onClose() {
      return console.log('modal closed!');
    },
    open: true
  });
  modal.appendChild('This is the content of the modal.');
  root.appendChild(modal);
  root.mount();
});