import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen
          name="RadioButtonList"
          title="RadioButtonList"
        >
          <s-scroll-view>
            <s-radio-button-list
              items={['1', '2', '3']}
              onitemselected={setSelected}
              initialSelectedItem={selected}
            />
            <s-text>{selected}</s-text>
          </s-scroll-view>
        </s-screen>
  );
}