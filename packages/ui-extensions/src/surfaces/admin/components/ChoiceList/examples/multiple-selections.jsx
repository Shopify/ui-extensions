<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>