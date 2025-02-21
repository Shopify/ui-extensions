import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-admin-action title="My App Action">
      Modal content
      <s-button
        slot="primaryAction"
        onClick={() => console.log('pressed primary action')}
      >
        Primary
      </s-button>
      <s-button
        slot="secondaryActions"
        onClick={() => console.log('pressed secondary action')}
      >
        Secondary
      </s-button>
    </s-admin-action>,
    document.body,
  );
}
