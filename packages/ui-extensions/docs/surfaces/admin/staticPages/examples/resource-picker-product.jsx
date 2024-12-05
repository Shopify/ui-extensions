import {
  reactExtension,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/admin';

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  const {resourcePicker} = useApi(TARGET);

  const selectProduct = async () => {
    const selected = await resourcePicker({type: 'product'});
    console.log(selected);
  };

  return <Button onClick={selectProduct}>Select product</Button>;
}
