const [email, setEmail] = useState('invalid-email');
const [error, setError] = useState('Please enter a valid email address');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-email-field
        label="Contact email"
        details="We'll send your order confirmation here"
        value={email}
        error={error}
        required
        onInput={(e) => {
          setEmail(e.currentTarget.value);
          setError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.currentTarget.value) ? '' : 'Please enter a valid email address');
        }}
      />
    </s-stack>
  </s-section>
)