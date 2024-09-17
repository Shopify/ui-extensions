import {useState} from 'react';
import {
  reactExtension,
  AdminBlock,
  BlockStack,
  TextField,
  NumberField,
  Form,
} from '@shopify/ui-extensions-react/admin';

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, async () => {
  const data = await fetch('/data.json');
  const {text, number} = await data.json();
  return <App text={text} number={number} />;
});

function App({text, number}) {
  // The initial values set in the form fields will be the default values
  const [textValue, setTextValue] = useState(text);
  const [numberValue, setNumberValue] = useState(number);

  return (
    <AdminBlock title="My Block Extension">
      <Form
        onSubmit={() => console.log('submit', {textValue, numberValue})}
        onReset={() => console.log('automatically reset values')}
      >
        <BlockStack>
          <TextField
            label="Default Value"
            value={textValue}
            onChange={setTextValue}
          />
          <NumberField
            label="Percentage field"
            value={numberValue}
            onChange={setNumberValue}
          />
        </BlockStack>
      </Form>
    </AdminBlock>
  );
}
