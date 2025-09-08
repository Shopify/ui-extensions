import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(
    <MenuActionItemExtension />,
    document.body,
  );
};

function MenuActionItemExtension() {
  return (
    <s-button>
      {shopify.i18n.translate('menuItem.button')}
    </s-button>
  );
}
