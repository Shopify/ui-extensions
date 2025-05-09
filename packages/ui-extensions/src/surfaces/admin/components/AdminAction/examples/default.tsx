<s-admin-action title="My App Action">
  Modal content
  <s-button
    slot="primary-action"
    onClick={() => console.log('pressed primary action')}
  >
    Primary
  </s-button>
  <s-button
    slot="secondary-actions"
    onClick={() => console.log('pressed secondary action')}
  >
    Secondary
  </s-button>
</s-admin-action>;
