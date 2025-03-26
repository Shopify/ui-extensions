import { render } from 'preact';
import { useState } from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

async function Extension() {
  const data = await fetch('/data.json');
  const {text, number} = await data.json();
  return <App text={text} number={number} />;
}

function App({text, number}) {
  // The initial values set in the form fields will be the default values
  const [textValue, setTextValue] = useState(text);
  const [numberValue, setNumberValue] = useState(number);

  return (
    <s-admin-block title="My Block Extension">
      <s-form
        onSubmit={() => console.log('submit', {textValue, numberValue})}
        onReset={() => console.log('automatically reset values')}
      >
        <s-stack direction="block" gap="base">
          <s-text-field
            label="Default Value"
            value={textValue}
            onChange={setTextValue}
          />
          <s-number-field
            label="Percentage field"
            value={numberValue}
            onChange={setNumberValue}
          />
        </s-stack>
      </s-form>
    </s-admin-block>
  );
}
