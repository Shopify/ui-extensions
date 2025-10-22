const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
)