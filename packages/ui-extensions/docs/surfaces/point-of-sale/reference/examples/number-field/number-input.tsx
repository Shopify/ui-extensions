import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="NumberField" title="NumberField Example">
            <s-scroll-view>
              <s-number-field
                label="Number"
                placeholder="1234"
                helpText="Enter a numeric value."
                value={number}
                onchange={setNumber}
                required={true}
                action={{
                  label: 'Clear',
                  onpress: () => setNumber(''),
                }}
              />
              <s-text>Entered Value: {number}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}