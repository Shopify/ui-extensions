import {DropZone, extension} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const dropZone = root.createComponent(DropZone, {
    accept: 'image/*',
  });

  root.appendChild(dropZone);
});
