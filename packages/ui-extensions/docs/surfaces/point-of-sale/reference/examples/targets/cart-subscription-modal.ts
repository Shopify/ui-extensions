import {
  extension,
  Screen,
  Navigator,
  ScrollView,
  Section,
  SectionHeader,
  Selectable,
  Button,
  Text,
  Stack,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.cart.line-item-subscription.action.render',
  (root, api) => {
    let selectedPlanId = api.cartLineItem.currentSellingPlan?.id || null;
    
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
    
    const navigator = root.createComponent(Navigator);
    const screen = root.createComponent(Screen, {
      name: 'SubscriptionOptions',
      title: 'Subscription Options',
    });
    
    const scrollView = root.createComponent(ScrollView);
    
    // Plans section
    const plansSection = root.createComponent(Section);
    const plansSectionHeader = root.createComponent(SectionHeader, {
      title: 'Select a subscription plan',
    });
    plansSection.appendChild(plansSectionHeader);
    
    sellingPlans.forEach((plan) => {
      const selectable = root.createComponent(Selectable, {
        selected: selectedPlanId === plan.id,
        onPress: () => {
          selectedPlanId = plan.id;
          // Re-render logic would go here in a real implementation
        },
      });
      
      const stack = root.createComponent(Stack, {
        direction: 'vertical',
        spacing: 'none',
      });
      
      const nameText = root.createComponent(Text, {}, plan.name);
      const discountText = root.createComponent(Text, {
        appearance: 'subdued',
      }, `Save ${plan.discount}`);
      
      stack.appendChild(nameText);
      stack.appendChild(discountText);
      selectable.appendChild(stack);
      plansSection.appendChild(selectable);
    });
    
    // Actions section
    const actionsSection = root.createComponent(Section);
    const actionsStack = root.createComponent(Stack, {
      direction: 'vertical',
      spacing: 'base',
    });
    
    const saveButton = root.createComponent(Button, {
      title: 'Save',
      onPress: handleSave,
      disabled: !selectedPlanId,
      kind: 'primary',
    });
    actionsStack.appendChild(saveButton);
    
    if (api.cartLineItem.currentSellingPlan) {
      const removeButton = root.createComponent(Button, {
        title: 'Remove subscription',
        onPress: handleRemove,
        kind: 'critical',
      });
      actionsStack.appendChild(removeButton);
    }
    
    const cancelButton = root.createComponent(Button, {
      title: 'Cancel',
      onPress: () => api.navigation.dismiss(),
      kind: 'plain',
    });
    actionsStack.appendChild(cancelButton);
    
    actionsSection.appendChild(actionsStack);
    
    scrollView.appendChild(plansSection);
    scrollView.appendChild(actionsSection);
    screen.appendChild(scrollView);
    navigator.appendChild(screen);
    root.appendChild(navigator);
  },
);