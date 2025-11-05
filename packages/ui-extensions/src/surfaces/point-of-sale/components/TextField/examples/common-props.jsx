<s-text-field
  label="Product SKU"
  value={sku}
  placeholder="Enter SKU"
  details="Use format: ABC-123"
  error={hasError ? "SKU already exists" : undefined}
  disabled={isProcessing}
  required
  maxLength={20}
  onChange={(event) => setSku(event.currentTarget.value)}
/>