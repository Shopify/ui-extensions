import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name='stepper' title='Stepper'>
          <s-scroll-view>
            <s-stepper initialValue={value} onvaluechanged={setValue} />
            <s-text>{value}</s-text>
          </s-scroll-view>
        </s-screen>
  );
}