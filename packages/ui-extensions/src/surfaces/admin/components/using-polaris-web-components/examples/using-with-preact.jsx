export function ProductExtension() {
  return (
    <s-box padding="base">
      <s-stack gap="base">
        <s-text>Enable special pricing</s-text>
        <s-checkbox
          onChange={() => console.log('Checkbox toggled')}
        />
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
