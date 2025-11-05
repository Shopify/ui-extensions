<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>