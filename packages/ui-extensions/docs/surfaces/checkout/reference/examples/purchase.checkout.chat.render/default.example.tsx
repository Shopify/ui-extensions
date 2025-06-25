import {render} from 'preact';

// 1. Export the extension
export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  // 2. Render a Chat application. This target only accepts the Chat component. Any other components will not render.
  return (
    <s-chat inlineSize={100} blockSize={50} />
  );
}
