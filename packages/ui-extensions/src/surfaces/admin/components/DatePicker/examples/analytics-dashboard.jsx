{
  /* Sales analytics with date range */
}
<s-stack gap="base">
  <s-button-group>
    <s-button slot="secondary-actions">Last 7 days</s-button>
    <s-button slot="secondary-actions">Last 30 days</s-button>
    <s-button slot="secondary-actions">This month</s-button>
  </s-button-group>
  <s-date-picker
    type="range"
    name="analytics-period"
    id="analytics-picker"
   />
</s-stack>