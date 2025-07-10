import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="Home" title="Home">
            <s-text>Home screen</s-text>
            <s-button title="Navigate to details" onpress={() => api.navigation.navigate('Details')} />
          </s-screen>
          <s-screen name="Details" title="Details" presentation={{sheet: true}}>
            <s-text>Details screen</s-text>
          </s-screen>
        </s-navigator>
      )
    }

    export default reactExtension('pos.home.modal.render', () => <Modal />
  );
}