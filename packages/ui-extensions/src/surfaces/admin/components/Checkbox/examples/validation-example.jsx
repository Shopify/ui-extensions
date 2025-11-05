const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
        }}
      />
    </s-stack>
  </s-section>
)