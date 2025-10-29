import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading="Register Details Action">
      <s-scroll-box>
        <s-text>
          This is a action extension on the register details screen
        </s-text>
      </s-scroll-box>
    </s-page>
  );
};
