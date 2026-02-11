const [notificationsEnabled, setNotificationsEnabled] = useState(false);
const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);

return (
  <s-stack gap="base">
    <s-switch
      id="notifications"
      label="Email notifications"
      checked={notificationsEnabled}
      onChange={(e) => setNotificationsEnabled(e.currentTarget.checked)}
    />
    <s-switch
      id="autosave"
      label="Auto-save drafts"
      checked={autoSaveEnabled}
      onChange={(e) => setAutoSaveEnabled(e.currentTarget.checked)}
    />
    <s-box padding="base" background="subdued" borderRadius="base">
      <s-stack gap="small-200">
        <s-text>Current settings:</s-text>
        <s-text>
          Email notifications: {notificationsEnabled ? 'On' : 'Off'}
        </s-text>
        <s-text>
          Auto-save drafts: {autoSaveEnabled ? 'On' : 'Off'}
        </s-text>
      </s-stack>
    </s-box>
  </s-stack>
)
