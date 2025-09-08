import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<MenuActionExtension />, document.body);
};

function MenuActionExtension() {
  const translate = shopify.i18n.translate;

  return (
    <s-customer-account-action
      heading={translate('menuAction.title')}
    >
      <s-button
        slot="primary-action"
        onClick={() => shopify.close()}
      >
        {translate('menuAction.primaryAction')}
      </s-button>
      <s-paragraph>
        {translate('menuAction.content')}
      </s-paragraph>
    </s-customer-account-action>
  );
}
