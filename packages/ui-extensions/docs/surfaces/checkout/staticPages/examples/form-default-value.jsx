import { render } from 'preact';
import { useState } from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

const defaultValues = {
  text: 'default value',
  number: 50,
};

function Extension() {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  return (
      <s-form onSubmit={() => console.log('submit', {textValue, numberValue})}>
        <s-stack gap="base">
          <s-text-field
            label="Default Value"
            name="my-text"
            defaultValue={defaultValues.text}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <s-number-field
            label="Percentage field"
            name="my-number"
            defaultValue={defaultValues.number}
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </s-stack>
      </s-form>
  );
}
