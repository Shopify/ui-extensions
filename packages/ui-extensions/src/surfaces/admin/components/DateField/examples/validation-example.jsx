const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" inlineAlign="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.target.value);
          setError(e.target.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
)