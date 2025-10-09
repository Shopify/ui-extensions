const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" inlineAlign="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onChange={(e) => {
          setColor(e.target.value);
          setError(/^#([0-9A-F]{3}){1,2}$/i.test(e.target.value) ? '' : 'Please enter a valid color format');
        }}
      />
    </s-stack>
  </s-section>
)