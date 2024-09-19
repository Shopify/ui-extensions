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

export default reactExtension(TARGET, () => <App />);

const defaultValues = {
  text: 'default value',
  number: 50,
};

function App() {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  return (
    <AdminBlock title="My Block Extension">
      <Form
        onSubmit={() => console.log('submit', {textValue, numberValue})}
        onReset={() => console.log('automatically reset values')}
      >
        <BlockStack>
          <TextField
            label="Default Value"
            defaultValue={defaultValues.text}
            value={textValue}
            onChange={setTextValue}
          />
          <NumberField
            label="Percentage field"
            defaultValue={defaultValues.number}
            value={numberValue}
            onChange={setNumberValue}
          />
        </BlockStack>
      </Form>
    </AdminBlock>
  );
}
