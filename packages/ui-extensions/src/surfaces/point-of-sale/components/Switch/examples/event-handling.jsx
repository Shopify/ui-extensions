<s-switch
  label="Enable special pricing"
  details="Apply discounted rates to this transaction"
  onChange={(event) => {
    console.log('onChange - Checked:', event.currentTarget.checked);
  }}
/>
