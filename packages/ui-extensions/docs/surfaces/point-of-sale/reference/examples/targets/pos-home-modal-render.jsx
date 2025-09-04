import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="HelloWorld">
      <s-screen name="HelloWorld" title="Hello World!">
        <s-scroll-box>
          <s-text>Welcome to the extension!</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
