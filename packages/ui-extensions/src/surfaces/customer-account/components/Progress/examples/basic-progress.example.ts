import {extension, Progress} from '@shopify/ui-extensions/customer-account';

export default extension('customer-account.page.render', (root) => {
  const baseProgress = root.createComponent(Progress, {
    accessibilityLabel: 'Loading',
  });

  root.appendChild(baseProgress);
});
