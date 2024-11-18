import {
  reactExtension,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/admin';

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  const {resourcePicker} = useApi(TARGET);

  const handleSelectProduct = async () => {
    const selected = await resourcePicker({type: 'product'});
    console.log(selected);
  };

  return <Button onClick={handleSelectProduct}>Select product</Button>;
}
