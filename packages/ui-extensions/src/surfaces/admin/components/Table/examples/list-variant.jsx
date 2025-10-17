<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>