import {extension, SkeletonText} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const skeletonText = root.createComponent(SkeletonText);

  root.appendChild(skeletonText);
});
