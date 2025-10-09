<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>