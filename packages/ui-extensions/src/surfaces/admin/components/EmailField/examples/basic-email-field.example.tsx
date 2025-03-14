import '@shopify/ui-extensions/preact';
import {render} from 'preact';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function extension() {
  const [error, setError] = useState('');

  const onInput = (event: Event) => {
    if (!emailRegex.test(event.target.value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  render(
    <s-email-field 
      label="Email" 
      placeholder="Enter your email" 
      onInput={onInput} 
      error={error} 
    />,
    document.body,
  );
}
