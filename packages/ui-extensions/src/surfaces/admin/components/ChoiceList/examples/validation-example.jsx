const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
)