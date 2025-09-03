import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-tile
      heading="My app"
      subheading="SmartGrid react Extension"
      onClick={() => {
        shopify.action.presentModal();
      }}
    />
  );
};
