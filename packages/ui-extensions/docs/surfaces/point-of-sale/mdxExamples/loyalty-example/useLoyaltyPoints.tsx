import {useEffect, useState} from 'react';
import {serverUrl} from './LoyaltyPointsBlock';

export const useLoyaltyPoints = (
  api: any,
  customerId: number,
  setPointsTotal: React.Dispatch<React.SetStateAction<number | null>>,
) => {
  const [loading, setLoading] = useState(false);
  // [START use-loyalty-points.fetch]
  // 1. Fetch the points total from the server
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        // Get the session token
        setLoading(true);
        const sessionToken = await api.session.getSessionToken();

        const response = await fetch(`${serverUrl}/points/${customerId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error Response Text:', errorText);
          throw new Error(`Failed to fetch order data: ${errorText}`);
        }

        const data = await response.json();

        if (typeof data.totalPoints === 'number') {
          // 2. Update the points total in the state
          setPointsTotal(data.totalPoints);
        } else {
          console.error('No points available in the response.');
        }
      } catch (error) {
        console.error('Error fetching order data in client:', error);
      } finally {
        setLoading(false);
      }
    };
    // [END use-loyalty-points.fetch]

    fetchOrderData();
  }, [api, customerId, setPointsTotal]);

  return {loading};
};
