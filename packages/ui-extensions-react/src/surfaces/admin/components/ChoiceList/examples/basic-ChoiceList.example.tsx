import {render, ChoiceList} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <ChoiceList
      title="Company name"
      choices={[
        {label: 'Hidden', value: 'hidden'},
        {label: 'Optional', value: 'optional'},
        {label: 'Required', value: 'required'},
      ]}
    />
  );
}