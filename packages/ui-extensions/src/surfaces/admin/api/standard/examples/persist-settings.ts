import {extension, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {storage} = api;

    let preferencesText;
    const stack = root.createComponent(BlockStack);

    const loadPreferences = async () => {
      const prefs = await storage.get('userPreferences');
      
      if (prefs && preferencesText) {
        stack.removeChild(preferencesText);
      }

      if (prefs) {
        preferencesText = root.createComponent(BlockStack);
        const themeText = root.createComponent(Text, {}, `Theme: ${prefs.theme}`);
        const notifText = root.createComponent(Text, {}, `Notifications: ${String(prefs.notifications)}`);
        const viewText = root.createComponent(Text, {}, `View: ${prefs.defaultView}`);
        
        preferencesText.appendChild(themeText);
        preferencesText.appendChild(notifText);
        preferencesText.appendChild(viewText);
        
        stack.appendChild(preferencesText);
      }
    };

    loadPreferences();

    const saveButton = root.createComponent(Button, {
      title: 'Save Preferences',
      onPress: async () => {
        await storage.set('userPreferences', {
          theme: 'dark',
          notifications: true,
          defaultView: 'grid',
        });

        await loadPreferences();
      },
    });

    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
