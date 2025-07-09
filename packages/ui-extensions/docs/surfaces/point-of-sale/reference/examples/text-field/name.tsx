import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="TextField" title="Text Field Example">
            <s-scroll-view>
              <s-textField
                label="Name"
                placeholder="Input your name here"
                required={true}
                value={name}
                onchange={setName}
              />
              <s-text>{name ? `Hello ${name}!` : ''}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}