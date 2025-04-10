import {
  BlockStack,
  Text,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.footer.render-after',
  (root, {extension}) => {
    root.appendChild(
      root.createComponent(
        BlockStack,
        undefined,
        root.createComponent(
          Text,
          undefined,
          `target: ${extension.target}`,
        ),
      ),
    );
  },
);
