<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>