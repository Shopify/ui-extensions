import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [preferences, setPreferences] = useState(null);

  useEffect(() => {
    const loadPreferences = async () => {
      const prefs = await shopify.storage.get('userPreferences');
      setPreferences(prefs);
    };
    
    loadPreferences();
  }, []);

  const handleSave = async () => {
    await shopify.storage.set('userPreferences', {
      theme: 'dark',
      notifications: true,
      defaultView: 'grid',
    });
    
    const updated = await shopify.storage.get('userPreferences');
    setPreferences(updated);
  };

  return (
    <s-admin-block heading="User Preferences">
      <s-button onClick={handleSave}>Save Preferences</s-button>
      {preferences && (
        <s-stack direction="block">
          <s-text>Theme: {preferences.theme}</s-text>
          <s-text>Notifications: {String(preferences.notifications)}</s-text>
          <s-text>View: {preferences.defaultView}</s-text>
        </s-stack>
      )}
    </s-admin-block>
  );
}
