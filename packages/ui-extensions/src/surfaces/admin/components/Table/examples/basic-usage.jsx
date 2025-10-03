<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>