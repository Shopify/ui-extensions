import React, {useState, useEffect} from 'react';

import {
  Text,
  Screen,
  ScrollView,
  reactExtension,
  useApi,
  Button,
  Stack,
  Section,
  TextField,
  List,
  ListRowSubtitle,
} from '@shopify/ui-extensions-react/point-of-sale';

import type {Storage} from '@shopify/ui-extensions/point-of-sale';

// [START safe-modal.data-interfaces]
// 2. Define the interfaces for storing safe management data
interface SafeActivity {
  id: number;
  type: string;
  amount: number;
  timestamp: Date;
}

interface SafeDetails {
  balance: number;
  activities: SafeActivity[];
}
// [END safe-modal.data-interfaces]

// [START safe-modal.component]
// 3. Implement the `SafeModal` component
const SafeModal = () => {
  const [activityType, setActivityType] = useState('deposit');
  const [amount, setAmount] = useState('');
  // [END safe-modal.component]

  // [START safe-modal.storage-setup]
  // 4. Setup the api and storage
  const api = useApi<'pos.product-details.action.render'>();
  const storage: Storage<SafeDetails> = api.storage;

  // 5. Setup the states for the safe management data
  const [balance, setBalance] = useState<number>(0);
  const [activities, setActivities] = useState<SafeActivity[]>([]);
  // [END safe-modal.storage-setup]

  // [START safe-modal.load-data]
  // 6. Load the data from the storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedBalance = (await storage.get('balance')) || 0;
        const storedActivities = (await storage.get('activities')) || [];

        setBalance(storedBalance);
        setActivities(storedActivities);
      } catch (error) {
        console.error('Error loading data from storage:', error);
      }
    };

    loadData();
  }, [storage]);
  // [END safe-modal.load-data]

  // [START safe-modal.handle-activity]
  // 7. Implement deposit and withdrawal logic
  const handleActivity = async () => {
    const activityAmount = parseFloat(amount);

    try {
      let newBalance = balance;
      if (activityType === 'deposit') {
        newBalance = balance + activityAmount;
      } else if (activityType === 'withdrawal') {
        newBalance = balance - activityAmount;
      }
      setBalance(newBalance);
      await storage.set('balance', newBalance);

      const newActivity: SafeActivity = {
        id: activities.length + 1,
        type: activityType,
        amount: activityAmount,
        timestamp: new Date(),
      };
      const updatedActivities = [...activities, newActivity];
      setActivities(updatedActivities);
      await storage.set('activities', updatedActivities);

      setAmount('');
    } catch (error) {
      console.error('Error saving activity:', error);
    }
  };
  // [END safe-modal.handle-activity]

  // [START safe-modal.validation]
  // 8. Check if the activity amount is valid
  const canSubmit = () => {
    const activityAmount = parseFloat(amount);
    if (isNaN(activityAmount) || activityAmount <= 0) return false;
    if (activityType === 'withdrawal' && activityAmount > balance) return false;
    return true;
  };
  // [END safe-modal.validation]

  // [START safe-modal.format-activities]
  // 9. Format the activities in to a list
  const activityListData = (activities || []).map((activity: SafeActivity) => ({
    id: activity.id.toString(),
    leftSide: {
      label: `$${(activity.amount || 0).toFixed(2)}`,
      subtitle: [
        {
          content: activity.type === 'deposit' ? 'Deposit' : 'Withdrawal',
        },
      ] as [ListRowSubtitle],
    },
    rightSide: {
      label: new Date(activity.timestamp).toLocaleString(),
    },
  }));
  // [END safe-modal.format-activities]

  // 10. Render the SafeModal component to use the safe management solution
  return (
    <Screen name="SafeManagement" title="Safe Management">
      <ScrollView>
        {/* [START safe-modal.overview-section] */}
        <Section title="Overview">
          <Stack padding="200">
            <Text>Current Balance</Text>
            <Text>${(balance || 0).toFixed(2)}</Text>
          </Stack>
          <Stack padding="200">
            <Text>Activities Count</Text>
            <Text>{activities.length}</Text>
          </Stack>
        </Section>
        {/* [END safe-modal.overview-section] */}

        {/* [START safe-modal.activity-form] */}
        <Section title="New Activity">
          <Stack direction="inline" gap="200" inlineSize="100%">
            <Stack flex={1} flexChildren>
              <Button
                title="Deposit"
                onPress={() => setActivityType('deposit')}
                type={activityType === 'deposit' ? 'primary' : undefined}
              />
            </Stack>
            <Stack flex={1} flexChildren>
              <Button
                title="Withdrawal"
                onPress={() => setActivityType('withdrawal')}
                type={activityType === 'withdrawal' ? 'primary' : undefined}
              />
            </Stack>
          </Stack>

          <TextField
            label="Amount ($)"
            value={amount}
            onChange={setAmount}
            placeholder="0.00"
            error={
              activityType === 'withdrawal' && parseFloat(amount) > balance
                ? `Cannot exceed balance of $${(balance || 0).toFixed(2)}`
                : undefined
            }
          />

          <Button
            title={`Confirm ${
              activityType === 'deposit' ? 'Deposit' : 'Withdrawal'
            }`}
            onPress={handleActivity}
            type="primary"
            isDisabled={!canSubmit()}
          />
        </Section>
        {/* [END safe-modal.activity-form] */}

        {/* [START safe-modal.activities-list] */}
        <Section title="Recent Activities">
          <List data={activityListData} />
          {/* [START safe-modal.clear-activities] */}
          <Button
            title="Clear Activities"
            type="destructive"
            onPress={() => {
              storage.set('activities', []);
              setActivities([]);
            }}
          />
          {/* [END safe-modal.clear-activities] */}
        </Section>
        {/* [END safe-modal.activities-list] */}
      </ScrollView>
    </Screen>
  );
};

// [START safe-modal.render-extension]
// 1. Render the SafeModal component at the `pos.product-details.action.render` target
export default reactExtension('pos.product-details.action.render', () => (
  <SafeModal />
));
// [END safe-modal.render-extension]
