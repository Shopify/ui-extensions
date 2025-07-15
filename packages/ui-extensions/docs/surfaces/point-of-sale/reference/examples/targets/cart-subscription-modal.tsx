import React, {useState} from 'react';
import {
  reactExtension,
  Screen,
  Navigator,
  ScrollView,
  Section,
  SectionHeader,
  Selectable,
  Button,
  Text,
  Stack,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const SubscriptionModalComponent = () => {
  const api = useApi<'pos.cart.line-item-subscription.action.render'>();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(
    api.cartLineItem.currentSellingPlan?.id || null
  );
  
  // Mock selling plans - in a real implementation, these would come from an API
  const sellingPlans = [
    {id: 'plan1', name: 'Weekly delivery', discount: '10%'},
    {id: 'plan2', name: 'Bi-weekly delivery', discount: '5%'},
    {id: 'plan3', name: 'Monthly delivery', discount: '3%'},
  ];
  
  const handleSave = async () => {
    if (selectedPlanId) {
      // In a real implementation, you would update the cart line item here
      // await api.cart.updateLineItemSellingPlan(api.cartLineItem.uuid, selectedPlanId);
      console.log('Saving selling plan:', selectedPlanId);
    }
    api.navigation.dismiss();
  };
  
  const handleRemove = async () => {
    // In a real implementation, you would remove the selling plan here
    // await api.cart.removeLineItemSellingPlan(api.cartLineItem.uuid);
    console.log('Removing selling plan');
    api.navigation.dismiss();
  };
  
  return (
    <Navigator>
      <Screen name="SubscriptionOptions" title="Subscription Options">
        <ScrollView>
          <Section>
            <SectionHeader title="Select a subscription plan" />
            {sellingPlans.map((plan) => (
              <Selectable
                key={plan.id}
                selected={selectedPlanId === plan.id}
                onPress={() => setSelectedPlanId(plan.id)}
              >
                <Stack direction="vertical" spacing="none">
                  <Text>{plan.name}</Text>
                  <Text appearance="subdued">Save {plan.discount}</Text>
                </Stack>
              </Selectable>
            ))}
          </Section>
          
          <Section>
            <Stack direction="vertical" spacing="base">
              <Button
                title="Save"
                onPress={handleSave}
                disabled={!selectedPlanId}
                kind="primary"
              />
              {api.cartLineItem.currentSellingPlan && (
                <Button
                  title="Remove subscription"
                  onPress={handleRemove}
                  kind="critical"
                />
              )}
              <Button
                title="Cancel"
                onPress={() => api.navigation.dismiss()}
                kind="plain"
              />
            </Stack>
          </Section>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.cart.line-item-subscription.action.render',
  () => <SubscriptionModalComponent />,
);