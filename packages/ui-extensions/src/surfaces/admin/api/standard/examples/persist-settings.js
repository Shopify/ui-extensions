const {storage} = useApi(TARGET);

await storage.set('userPreferences', {
  theme: 'dark',
  notifications: true,
  defaultView: 'grid',
});

const preferences = await storage.get('userPreferences');

const allSettings = await storage.entries();
for (const [key, value] of allSettings) {
  console.log(`${key}:`, value);
}
