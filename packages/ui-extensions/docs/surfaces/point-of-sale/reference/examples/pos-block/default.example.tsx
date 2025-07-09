import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-pos-block
          action={{
            title: 'A toast message',
            onpress: () => {
              api.Toast.show('A toast message'
  );
}