<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
