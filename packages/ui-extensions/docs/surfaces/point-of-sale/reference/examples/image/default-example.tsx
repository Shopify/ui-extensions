import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="Image" title="Image Example">
            <s-scroll-view>
              <s-image src="example.png" />
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}