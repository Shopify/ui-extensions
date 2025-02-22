import {
  render,
  useApi,
  AdminBlock,
  Form,
  Button,
  HiddenField,
} from '@shopify/ui-extensions-react/admin';
import {useState} from 'react';

render('Playground', () => <App />);

function App() {
  const [selectedItem, setSelectedItem] =
    useState();
  const {resourcePicker} = useApi();

  return (
    <AdminBlock>
      <Form
        onSubmit={() => {
          //TODO: submit the form
        }}
        onReset={() => {
          setSelectedItem(undefined);
        }}
      >
        <Button
          onPress={async () => {
            const selectedProduct =
              await resourcePicker({
                type: 'product',
                action: 'select',
              });
            if (selectedItem?.length) {
              setSelectedItem(
                JSON.stringify(
                  selectedProduct[0],
                ),
              );
            }
          }}
        >
          Select product
        </Button>
        <HiddenField
          name="selected-product"
          value={selectedItem}
        />
      </Form>
    </AdminBlock>
  );
}
