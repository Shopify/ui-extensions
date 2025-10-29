import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return <s-button onClick={() => shopify.action.presentModal()} />;
};
