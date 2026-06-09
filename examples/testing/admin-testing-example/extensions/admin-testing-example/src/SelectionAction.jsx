import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {i18n, data} = shopify;
  const selectedCount = data.selected.length;

  return (
    <s-admin-action heading={i18n.translate('heading')}>
      <s-stack direction="block">
        <s-text>
          {selectedCount === 1
            ? i18n.translate('single_product')
            : i18n.translate('multiple_products', {count: selectedCount})}
        </s-text>
      </s-stack>
    </s-admin-action>
  );
}
