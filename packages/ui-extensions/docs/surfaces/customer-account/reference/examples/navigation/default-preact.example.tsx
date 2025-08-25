import {render} from 'preact';

export default async () => {
  render(<App />, document.body);
}

function App() {
  return (
    <s-button
      onClick={() => {
        navigation.navigate('extension://orders');
      }}
    >
      Navigate to orders path
    </s-button>
  );
}
