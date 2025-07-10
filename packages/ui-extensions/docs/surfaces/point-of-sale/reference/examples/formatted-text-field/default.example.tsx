import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen
            name="FormattedTextField"
            title="FormattedTextField Example"
          >
            <s-scroll-view>
              <s-formatted-text-field
                placeholder="Email address"
                inputType="email"
                onChangeText={setTextFieldValue}
              />
              <s-text>{textFieldValue}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}