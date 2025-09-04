import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

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
      <s-form onSubmit={() => console.log('submit', {textValue, numberValue})}>
        <s-stack gap="base">
          <s-text-field
            label="Default Value"
            name="my-text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <s-number-field
            label="Percentage field"
            name="my-number"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </s-stack>
      </s-form>
  );
}
