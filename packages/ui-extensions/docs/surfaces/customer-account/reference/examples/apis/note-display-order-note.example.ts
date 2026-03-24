import {
  extension,
  Banner,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const note = api.note.current;

    if (!note) return;

    root.appendChild(
      root.createComponent(
        Banner,
        {status: 'info', title: 'Order note'},
        note,
      ),
    );
  },
);
