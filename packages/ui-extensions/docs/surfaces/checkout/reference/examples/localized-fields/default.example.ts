import {extension} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  'purchase.checkout.block.render',
  (root, {buyerJourney, localizedFields}) => {
    let taxIdField;

    localizedFields?.subscribe(
      (localizedFields) => {
        // 2. Access localized field values
        taxIdField = localizedFields?.find(
          ({key}) =>
            key.startsWith('TAX_CREDENTIAL'),
        );
      },
    );

    // 3. Validate localized field values
    buyerJourney.intercept(
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
                  // Show an error under the localized field or
                  // exclude target to show at the top of the page
                  target: `$.cart.localizedField.${taxIdField.key}`,
                },
              ],
            }
          : {
              behavior: 'allow',
            };
      },
    );
  },
);
