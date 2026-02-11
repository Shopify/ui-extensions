<s-grid justifyItems="center" alignItems="center" minBlockSize="200px">
  <s-box padding="small-100">
    <s-grid
      gridTemplateColumns="1fr auto"
      alignItems="center"
      gap="base"
    >
      <s-box>
        <s-heading>Reset app settings</s-heading>
        <s-paragraph color="subdued">
          Reset all settings to their default values. This action cannot be undone.
        </s-paragraph>
      </s-box>
      <s-button
        tone="critical"
        commandFor="reset-modal"
        command="--show"
      >
        Reset
      </s-button>
    </s-grid>
  </s-box>

  <s-modal id="reset-modal" heading="Reset all settings?">
    <s-stack direction="block" gap="base">
      <s-text>
        Are you sure you want to reset all settings to their default values? This will clear all your customizations and cannot be undone.
      </s-text>
      <s-banner tone="warning">
        <s-text>
          This will reset notification preferences, connected accounts, and all other configurations.
        </s-text>
      </s-banner>
    </s-stack>
    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      onClick={() => {
        shopify.toast.show('Settings reset to defaults');
      }}
    >
      Reset settings
    </s-button>
    <s-button
      slot="secondary-actions"
      commandFor="reset-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-grid>
