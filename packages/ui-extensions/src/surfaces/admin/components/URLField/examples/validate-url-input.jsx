const [url, setUrl] = useState('');
const [error, setError] = useState('');

const validateUrl = (value) => {
  if (!value) {
    return '';
  }
  
  try {
    const parsed = new URL(value);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return 'URL must start with http:// or https://';
    }
    return '';
  } catch {
    return 'Please enter a valid URL';
  }
};

const handleInput = (e) => {
  const value = e.currentTarget.value;
  setUrl(value);
  setError(validateUrl(value));
};

return (
  <s-stack gap="base">
    <s-url-field
      label="Website URL"
      placeholder="https://example.com"
      value={url}
      error={error}
      onInput={handleInput}
    />
    {url && !error && (
      <s-text tone="success">✓ Valid URL</s-text>
    )}
  </s-stack>
)
