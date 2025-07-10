import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="TimeField" title="TimeField Example">
            <s-scroll-view>
              <s-time-field label="Time" value={time} onchange={setTime} />
              <s-text>Selected Time: {time}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}