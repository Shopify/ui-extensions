import {render} from 'preact';

export default async () => {
  render(<App />, document.body);
}

function App() {
  return (
    <s-banner>
      {shopify.i18n.translate('welcomeMessage')}
    </s-banner>
  );
}
