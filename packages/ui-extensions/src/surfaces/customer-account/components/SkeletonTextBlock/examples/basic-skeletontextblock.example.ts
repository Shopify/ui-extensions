import {extension, SkeletonTextBlock} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const skeletonTextBlock = root.createComponent(SkeletonTextBlock);

  root.appendChild(skeletonTextBlock);
});
