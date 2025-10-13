<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>