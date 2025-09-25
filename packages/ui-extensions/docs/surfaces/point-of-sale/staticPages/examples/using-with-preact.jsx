export function ProductExtension() {
  return (
    <s-box padding="base">
      <s-stack gap="base">
        <s-text>Enable special pricing</s-text>
        <s-number-field
          label="Discount percentage"
          suffix="%"
          min="0"
          max="100"
        />
      </s-stack>
    </s-box>
  );
}
