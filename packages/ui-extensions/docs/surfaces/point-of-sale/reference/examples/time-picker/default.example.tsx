import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Home" title="Home">
          <s-text>Selected date: {date}</s-text>
          <s-button
            title="Show"
            onpress={() => {
              visibleState[1](true
  );
}