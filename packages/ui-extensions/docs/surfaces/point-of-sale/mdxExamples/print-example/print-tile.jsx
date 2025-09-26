import {render} from 'preact';

export default function extension() {
  render(<HomeTile />, document.body);
}

function HomeTile() {
  return (
    <s-tile
      heading="Print Tutorial"
      onClick={() => shopify.action.presentModal()}
    />
  );
}
