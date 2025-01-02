import {
  reactExtension,
  useBuyerJourneyIntercept,
  useLocalizedFields,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  // 1. Access localized field values
  const localizedFields = useLocalizedFields([
    'TAX_CREDENTIAL_BR',
  ]);

  // 2. Access localized field values
  const taxIdField = localizedFields?.[0];

  // 3. Validate localized field values
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
