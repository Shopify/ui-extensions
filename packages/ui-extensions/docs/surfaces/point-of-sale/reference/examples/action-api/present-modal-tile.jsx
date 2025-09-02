import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My App"
      subheading="Present modal from tile"
      onClick={() => {
        shopify.action.presentModal();
      }}
    />
  );
};
