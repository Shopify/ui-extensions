<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>