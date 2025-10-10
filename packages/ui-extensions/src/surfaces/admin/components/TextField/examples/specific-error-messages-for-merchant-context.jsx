<s-stack gap="base">
  {/* Generic error (avoid) */}
  <s-text-field label="Product weight" error="Invalid value" />

  {/* Specific error (preferred) */}
  <s-text-field
    label="Product weight"
    error="Weight must be greater than 0 and less than 500 pounds for shipping calculations"
   />

  {/* Business rule error */}
  <s-text-field
    label="SKU"
    error="SKU 'TSHIRT-001' already exists. SKUs must be unique across all products."
   />
</s-stack>