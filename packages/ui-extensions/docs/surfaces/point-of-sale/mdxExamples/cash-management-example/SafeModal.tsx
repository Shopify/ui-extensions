import React, {useState, useEffect} from 'react';

import {
  Text,
  Screen,
  ScrollView,
  reactExtension,
  useApi,
  Button,
  Stack,
  TextField,
  List,
  ListRowSubtitle,
  Navigator,
  SectionHeader,
} from '@shopify/ui-extensions-react/point-of-sale';

import type {Storage} from '@shopify/ui-extensions/point-of-sale';

// [START safe-modal.data-interfaces]
// 2. Define safe management data
interface SafeActivity {
  id: number;
  type: string;
  amount: number;
  timestamp: Date;
  staffName?: string;
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
  const [balance, setBalance] = useState<number>(0);
  const [activities, setActivities] = useState<SafeActivity[]>([]);
  // [END safe-modal.component]

  // [START safe-modal.api-storage]
  // 4. Setup the api and storage
  const api = useApi<'pos.cash-session-details.action.render'>();
  const storage: Storage<SafeDetails> = api.storage;
  const {staffMemberId} = api.session.currentSession;
  // [END safe-modal.api-storage]

  // [START safe-modal.load-data]
  // 5. Intalize or load the data from the storage
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
  // 6. Implement deposit and withdraw logic
  const handleActivity = async () => {
    const activityAmount = parseFloat(amount);

    try {
      if (activityType === 'deposit') {
        setBalance(balance + activityAmount);
      } else if (activityType === 'withdraw') {
        setBalance(balance - activityAmount);
      }
      await storage.set('balance', balance);

      const newActivity: SafeActivity = {
        id: activities.length + 1,
        type: activityType,
        amount: activityAmount,
        timestamp: new Date(),
        staffName: staffMemberId?.toString(),
      };
      setActivities([...activities, newActivity]);
      await storage.set('activities', activities);

      setAmount('');
      api.navigation.pop();
    } catch (error) {
      console.error('Error saving activity:', error);
    }
  };
  // [END safe-modal.handle-activity]

  // [START safe-modal.validation]
  // 7. Check if the activity amount is valid
  const canSubmit = () => {
    const activityAmount = parseFloat(amount);
    if (isNaN(activityAmount) || activityAmount <= 0) return false;
    if (activityType === 'withdraw' && activityAmount > balance) return false;
    return true;
  };
  // [END safe-modal.validation]

  // [START safe-modal.format-activities]
  // 8. Format the activities into a list
  const activityListData = (activities || []).map((activity: SafeActivity) => ({
    id: activity.id.toString(),
    leftSide: {
      label: new Date(activity.timestamp).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }),
      subtitle: [
        {
          content: activity.staffName,
        },
      ] as [ListRowSubtitle],
    },
    rightSide: {
      label: `${activity.type === 'deposit' ? '+' : '-'} $${(
        activity.amount || 0
      ).toFixed(2)}`,
    },
  }));
  // [END safe-modal.format-activities]

  // [START safe-modal.format-overview]
  // 9. Format the safe overview into a list
  const overviewListData = [
    {
      id: 'current-balance',
      leftSide: {
        label: 'Current balance:',
      },
      rightSide: {
        label: `$${(balance || 0).toFixed(2)}`,
      },
    },
    {
      id: 'last-activity',
      leftSide: {
        label: 'Last activity:',
      },
      rightSide: {
        label:
          activities.length > 0
            ? new Date(
                activities[activities.length - 1].timestamp,
              ).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
              })
            : 'No activities yet',
      },
    },
  ];
  // [END safe-modal.format-overview]

  // [START safe-modal.render-ui]
  // 10. Render the SafeModal component to display the safe management solution
  return (
    <Navigator>
      <Screen name="SafeManagement" title="Manage Safe">
        <ScrollView>
          <Stack
            direction="inline"
            gap="300"
            inlineSize="100%"
            alignItems="stretch"
          >
            <Stack direction="block" flex={3} inlineSize="100%">
              <Text variant="display">Manage Safe</Text>

              <SectionHeader title="Overview" />
              <Stack inlineSize="100%">
                <List data={overviewListData} />
              </Stack>

              <SectionHeader title="Recent activity" />
              <Stack inlineSize="100%">
                <List data={activityListData.reverse()} />
              </Stack>
            </Stack>

            <Stack direction="block" gap="200" flex={1} paddingBlockStart="400">
              <Stack inlineSize="100%" flexChildren>
                <Button
                  title="+ Deposit"
                  onPress={() => {
                    setActivityType('deposit');
                    api.navigation.navigate('ActivityModal');
                  }}
                  type="basic"
                />
              </Stack>
              <Stack inlineSize="100%" flexChildren>
                <Button
                  title="- Withdraw"
                  onPress={() => {
                    setActivityType('withdraw');
                    api.navigation.navigate('ActivityModal');
                  }}
                  type="basic"
                />
              </Stack>
            </Stack>
          </Stack>
        </ScrollView>
      </Screen>

      <Screen name="ActivityModal" title="Activity Modal">
        <ScrollView>
          <TextField
            label="Amount ($)"
            value={amount}
            onChange={setAmount}
            placeholder="0.00"
            error={
              activityType === 'withdraw' && parseFloat(amount) > balance
                ? `Cannot exceed balance of $${(balance || 0).toFixed(2)}`
                : undefined
            }
          />

          <Button
            title={`Confirm ${
              activityType === 'deposit' ? 'Deposit' : 'Withdraw'
            }`}
            onPress={handleActivity}
            type="primary"
            isDisabled={!canSubmit()}
          />
        </ScrollView>
      </Screen>
    </Navigator>
  );
};
// [END safe-modal.render-ui]

// [START safe-modal.render-extension]
// 1. Render the SafeModal component at the `pos.cash-session-details.action.render` target
export default reactExtension('pos.cash-session-details.action.render', () => (
  <SafeModal />
));
// [END safe-modal.render-extension]
