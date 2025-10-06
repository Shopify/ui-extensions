<form>
  <s-grid gridTemplateColumns="1fr" gap="base">
    <s-text-field
      label="Product name"
      placeholder="Enter product name"
     />
    <s-date-picker
      type="single"
      name="delivery-date"
      disallow="past"
      disallowDays="saturday,sunday"
     />
    <s-button type="submit">Schedule delivery</s-button>
  </s-grid>
</form>