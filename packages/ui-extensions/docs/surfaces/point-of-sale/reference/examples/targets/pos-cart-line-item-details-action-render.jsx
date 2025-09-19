import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-page heading='Cart Line Item Details'>
      <s-scroll-box>
        <s-text>Cart Line item action extension</s-text>
      </s-scroll-box>
    </s-page>
  );
};
