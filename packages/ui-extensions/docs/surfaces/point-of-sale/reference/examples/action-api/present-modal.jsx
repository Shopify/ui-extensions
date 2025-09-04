import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-action-item
      onClick={() => {
        shopify.action.presentModal();
      }}
    />
  );
};
