import {
  reactExtension,
  useBuyerJourneyIntercept,
  useLocalizedField,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  // 2. Access localized field value
  const taxIdField = useLocalizedField(
    'TAX_CREDENTIAL_BR',
  );

  // 3. Validate localized field value
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
