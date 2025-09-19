import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading="Hello World!">
      <s-scroll-box>
        <s-text>Welcome to the extension!</s-text>
      </s-scroll-box>
    </s-page>
  );
};
