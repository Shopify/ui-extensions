import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="Image" title="Image Example">
            <s-scroll-view>
              <s-icon name="call" size="minor" />
              <s-icon name="card-reader" size="major" />
              <s-icon name="circle-cancel" size="spot" />
              <s-icon name="orders" size="caption" />
              <s-icon name="star" size="badge" />
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}