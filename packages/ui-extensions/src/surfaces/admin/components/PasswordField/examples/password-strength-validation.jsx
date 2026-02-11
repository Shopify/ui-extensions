const [password, setPassword] = useState('');

const hasMinLength = password.length >= 8;
const hasUppercase = /[A-Z]/.test(password);
const hasLowercase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);

return (
  <s-stack gap="base">
    <s-password-field
      label="Create password"
      name="password"
      value={password}
      autocomplete="new-password"
      required
      onInput={(e) => setPassword(e.currentTarget.value)}
    />
    <s-stack gap="small-200">
      {hasMinLength ? (
        <s-text tone="success">✓ At least 8 characters</s-text>
      ) : (
        <s-text color="subdued">○ At least 8 characters</s-text>
      )}
      {hasUppercase ? (
        <s-text tone="success">✓ Contains uppercase letter</s-text>
      ) : (
        <s-text color="subdued">○ Contains uppercase letter</s-text>
      )}
      {hasLowercase ? (
        <s-text tone="success">✓ Contains lowercase letter</s-text>
      ) : (
        <s-text color="subdued">○ Contains lowercase letter</s-text>
      )}
      {hasNumber ? (
        <s-text tone="success">✓ Contains number</s-text>
      ) : (
        <s-text color="subdued">○ Contains number</s-text>
      )}
    </s-stack>
  </s-stack>
)
