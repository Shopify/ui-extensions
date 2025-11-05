<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>