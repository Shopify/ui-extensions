<s-stack gap="base">
  {/* Controlled component */}
  <s-text-field label="Store name" value="My controlled store" />

  {/* Uncontrolled component */}
  <s-text-field
    label="Store name"
    value="My store"
    name="storeName"
   />
</s-stack>