// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const translations = {
  en: {
    title: 'Need help with your order?',
    description:
      'Our support team is available 24/7.',
    contact: 'Contact Support',
  },
  fr: {
    title: 'Besoin d\u2019aide avec votre commande?',
    description:
      'Notre \u00e9quipe est disponible 24h/24.',
    contact: 'Contacter le support',
  },
  es: {
    title: '\u00bfNecesitas ayuda con tu pedido?',
    description:
      'Nuestro equipo est\u00e1 disponible 24/7.',
    contact: 'Contactar soporte',
  },
};

function Extension() {
  const language =
    shopify.localization.extensionLanguage.value;
  const t =
    translations[language.isoCode] ||
    translations.en;

  return (
    <s-box
      padding="base"
      border="base"
      borderRadius="base"
    >
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">{t.title}</s-text>
        <s-text color="subdued">
          {t.description}
        </s-text>
        <s-button>{t.contact}</s-button>
      </s-stack>
    </s-box>
  );
}
