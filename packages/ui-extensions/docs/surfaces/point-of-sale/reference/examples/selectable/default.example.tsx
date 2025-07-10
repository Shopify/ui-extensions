import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name='selectable' title='Selectable'>
          <s-scroll-view>
            <s-selectable onpress={() => {setCount(count + 1)}}>
              <s-text variant="body">{count}</s-text>
            </s-selectable>
          </s-scroll-view>
        </s-screen>
  );
}