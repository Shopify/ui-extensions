import {
  reactExtension,
  useApi,
  Button,
} from '@shopify/ui-extensions-react/admin';

const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  const {picker} = useApi(TARGET);

  const handleSelectEmailTemplate = async () => {
    const pickerInstance = await picker({
      heading: 'Select a template',
      multiple: false,
      headers: [
        {content: 'Templates'},
        {content: 'Created by'},
        {content: 'Times used', type: 'number'},
      ],
      items: [
        {
          id: '1',
          heading: 'Full width, 1 column',
          data: ['Karine Ruby', '0'],
          badges: [{content: 'Draft', tone: 'info'}, {content: 'Marketing'}],
        },
        {
          id: '2',
          heading: 'Large graphic, 3 column',
          data: ['Charlie Mitchell', '5'],
          badges: [
            {content: 'Published', tone: 'success'},
            {content: 'New feature'},
          ],
          selected: true,
        },
        {
          id: '3',
          heading: 'Promo header, 2 column',
          data: ['Russell Winfield', '10'],
          badges: [{content: 'Published', tone: 'success'}],
        },
      ],
    });

    const selected = await pickerInstance.selected;
    console.log(selected);
  };

  return (
    <Button onClick={handleSelectEmailTemplate}>Select email template</Button>
  );
}
