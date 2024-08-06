import {DropZone, extension} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root, api) => {
  renderApp(root, api);
});

async function renderApp(root, api) {
  const dropZone = root.createComponent(DropZone, {
    accept: 'image/*',
  });

  root.append(dropZone);
}
