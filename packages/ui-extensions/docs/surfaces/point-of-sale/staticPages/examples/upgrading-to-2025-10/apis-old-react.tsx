import {
  reactExtension,
  Button,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

export default reactExtension('pos.home.modal.render', () => <Extension />);

function Extension() {
  const api = useApi();

  async function onButtonClick(isChecked) {
    await api.print.print('documents/test-print');
    console.log('print completed');
  }

  return <Button onPress={onButtonClick} title="Print" />;
}
