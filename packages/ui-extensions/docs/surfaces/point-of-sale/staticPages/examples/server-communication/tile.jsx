import {render} from 'preact';

export default function extension() {
  render(<SmartGridTile />, document.body);
}

function SmartGridTile() {
  return (
    <s-tile
      heading="Example extension"
      onClick={() => shopify.action.presentModal()}
    />
  );
}
