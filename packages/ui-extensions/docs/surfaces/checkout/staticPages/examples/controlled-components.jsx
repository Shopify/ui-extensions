// Uncontrolled component - internal state
<s-text-field
  label="Comment"
  name="comment"
  defaultValue="Initial value"
  onChange={(e) => console.log('New value:', e.currentTarget.value)}
/>

// Controlled component - external state
// In a real component, 'name' would be from framework state
const name = "John Doe";

<s-text-field
  label="Name"
  name="name"
  value={name}
  onChange={(e) => {
    console.log('Would update state:', e.currentTarget.value)
  }}
/>