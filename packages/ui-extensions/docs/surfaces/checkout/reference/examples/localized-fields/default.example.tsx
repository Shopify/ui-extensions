import {render} from 'preact';
import {
  useBuyerJourneyIntercept,
  useLocalizedField,
} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  // 1. Access localized field
  const taxIdField = useLocalizedField(
    'TAX_CREDENTIAL_BR',
  );

  // 2. Validate localized field value
  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {
      return canBlockProgress &&
        taxIdField &&
        (!taxIdField.value ||
          taxIdField.value.length > 10)
        ? {
            behavior: 'block',
            reason: 'Invalid tax ID',
            errors: [
              {
                message: `${taxIdField.title} is required and
                cannot exceed 10 characters in length`,
                // Show an error under the field
                target: `$.cart.localizedField.${taxIdField.key}`,
              },
            ],
          }
        : {
            behavior: 'allow',
          };
    },
  );
}
