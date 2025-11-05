const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
        }}
      />
    </s-stack>
  </s-section>
)