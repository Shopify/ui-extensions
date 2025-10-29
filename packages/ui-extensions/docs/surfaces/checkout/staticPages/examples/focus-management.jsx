<s-email-field
  label="email"
  name="email"
  onFocus={() => console.log('Field focused')}
  onBlur={() => console.log('Field blurred')}
></s-email-field>

<s-text-field
  label="Tab to next field to trigger blur"
  name="name"
  onFocus={(e) => {
    e.currentTarget.setAttribute('label', 'Field is active!')
  }}
  onBlur={(e) => {
    e.currentTarget.setAttribute('label', 'Tab to next field to trigger blur')
  }}
></s-text-field>
