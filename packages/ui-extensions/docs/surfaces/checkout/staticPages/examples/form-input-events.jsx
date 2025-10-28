// OnInput fires on every keystroke
<s-email-field
  label="Email"
  name="email"
  onInput={(e) => console.log('Typing:', e.currentValue.value)}
></s-email-field>

// OnChange fires on blur or Enter press
<s-text-field
  label="Name"
  name="name"
  onChange={(e) => console.log('Value committed:', e.currentValue.value)}
></s-text-field>

// Using both together
<s-email-field
  label="Email"
  name="email"
  onInput={(e) => console.log('Real-time:', e.currentTarget.value)}
  onChange={(e) => console.log('Final value:', e.currentTarget.value)}
></s-email-field>