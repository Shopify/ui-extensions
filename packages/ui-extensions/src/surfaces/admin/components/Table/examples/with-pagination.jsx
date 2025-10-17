<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>