// Basic example for EmailField
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function extension() {
  const emailField = document.createElement('s-email-field');
  emailField.label = 'Email';
  emailField.placeholder = 'Enter your email';

  emailField.addEventListener('input', (event) => {
    console.log(event.target.value);
    if (!emailRegex.test(event.target.value)) {
      emailField.error = 'Invalid email address';
    } else {
      emailField.error = '';
    }
  });

  document.body.appendChild(emailField);
});
