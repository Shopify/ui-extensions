import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="DateField" title="DateField Example">
            <s-scroll-view>
              <s-date-field
                label="Date"
                value={date}
                onchange={setDate}
                action={{
                  label: 'Clear',
                  onpress: () => setDate(''),
                }}
              />
              <s-text>Selected Date: {date}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}