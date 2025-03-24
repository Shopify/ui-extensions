import {extension} from '@shopify/ui-extensions/customer-account';

// 1. Choose an extension target
export default extension(
  'customer-account.order-status.block.render',
  (root, {customerPrivacy}) => {
    const {
      visitorConsent: {
        analytics,
        marketing,
        preferences,
        saleOfData,
      },
    } = customerPrivacy.current;

    // 2. Use consent values
    console.log('initialValues');
    console.log('analytics', analytics);
    console.log('marketing', marketing);
    console.log('preferences', preferences);
    console.log('saleOfData', saleOfData);

    // 3. Update component state when customerPrivacy changes
    customerPrivacy.subscribe((value) => {
      if (!value) {
        return;
      }

      const {
        visitorConsent: {
          analytics,
          marketing,
          preferences,
          saleOfData,
        },
      } = value;

      console.log('updatedValues');
      console.log('analytics', analytics);
      console.log('marketing', marketing);
      console.log('preferences', preferences);
      console.log('saleOfData', saleOfData);
    });
  },
);
