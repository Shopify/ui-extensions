import {useEffect, useState} from 'react';

// [START use-business-rules.define-thresholds]
// 1. Define business rules, let's use a min/max cash threshold as an example
type BusinessRuleViolation = {
  isViolated: boolean;
  message?: string;
  ruleType?: string;
};

const MIN_CASH_THRESHOLD = 100;
const MAX_CASH_THRESHOLD = 1000;
// [END use-business-rules.define-thresholds]

// [START use-business-rules.direct-api]
// 2. Fetch the amount of cash in the drawer currently associated with the POS device
export const fetchDrawerAmount = async (pointOfSaleDeviceId: string) => {
  const result = await fetch('shopify:admin/api/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
          TBD
        `,
      variables: {
        pointOfSaleDeviceId: `gid://shopify/PointOfSaleDevice/${pointOfSaleDeviceId}`,
      },
    }),
  });

  const json = await result.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    json.errors.forEach((error: any) => {
      console.error('GraphQL Error Details:', error);
    });
    return null;
  }

  if (!result.ok) {
    console.error('Network Error:', result.statusText);
    return null;
  }

  return json.data;
};
// [END use-business-rules.direct-api]

// [START use-business-rules.check-drawer-amount]
// 3. Check if the drawer amount is within the min/max threshold
export const checkDrawerAmount = async (
  pointOfSaleDeviceId: string,
): Promise<BusinessRuleViolation> => {
  const drawerAmount = await fetchDrawerAmount(pointOfSaleDeviceId);
  if (drawerAmount < MIN_CASH_THRESHOLD) {
    return {
      isViolated: true,
      ruleType: 'drawer_amount',
      message: `Drawer amount is $${
        MIN_CASH_THRESHOLD - drawerAmount
      } below the minimum threshold`,
    };
  }
  if (drawerAmount > MAX_CASH_THRESHOLD) {
    return {
      isViolated: true,
      ruleType: 'drawer_amount',
      message: `Drawer amount is $${
        drawerAmount - MAX_CASH_THRESHOLD
      } above the maximum threshold`,
    };
  }
  return {
    isViolated: false,
  };
};
// [END use-business-rules.check-drawer-amount]

// [START use-business-rules.hook]
// 4. Implement the useBusinessRules hook
export const useBusinessRules = (pointOfSaleDeviceId: string) => {
  const [isViolated, setIsViolated] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkRules() {
      try {
        const result = await checkDrawerAmount(pointOfSaleDeviceId);
        setIsViolated(result.isViolated);

        if (result.isViolated) {
          setAlertMessage(result.message || '');
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    checkRules();
  }, [pointOfSaleDeviceId]);

  return {
    isViolated,
    alertMessage,
    loading,
  };
};
// [END use-business-rules.hook]
