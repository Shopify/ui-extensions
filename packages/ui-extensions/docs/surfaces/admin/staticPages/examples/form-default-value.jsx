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
    <s-admin-block title="My Block Extension">
      <s-form
        onSubmit={() => console.log('submit', {textValue, numberValue})}
        onReset={() => console.log('automatically reset values')}
      >
        <s-stack direction="block" gap="base">
          <s-text-field
            label="Default Value"
            defaultValue={defaultValues.text}
            value={textValue}
            onChange={setTextValue}
          />
          <s-number-field
            label="Percentage field"
            defaultValue={defaultValues.number}
            value={numberValue}
            onChange={setNumberValue}
          />
        </s-stack>
      </s-form>
    </s-admin-block>
  );
}
