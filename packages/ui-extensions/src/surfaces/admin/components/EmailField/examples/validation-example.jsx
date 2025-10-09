const [email, setEmail] = useState('invalid-email');
const [error, setError] = useState('Please enter a valid email address');

return (
  <s-section>
    <s-stack gap="base" inlineAlign="start">
      <s-text-field label="Name" />
      <s-email-field
        label="Contact email"
        details="We'll send your order confirmation here"
        value={email}
        error={error}
        required
        onInput={(e) => {
          setEmail(e.target.value);
          setError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? '' : 'Please enter a valid email address');
        }}
      />
    </s-stack>
  </s-section>
)