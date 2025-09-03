import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My App"
      onClick={() => shopify.toast.show('Toast content', 5000)}
    />
  );
};
