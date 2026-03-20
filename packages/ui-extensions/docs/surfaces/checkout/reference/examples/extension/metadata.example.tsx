import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useExtension} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {target, apiVersion, version} =
    useExtension();

  return (
    <s-stack>
      <s-text>
        Target: {target}
      </s-text>
      <s-text>
        API version: {apiVersion}
      </s-text>
      {version && (
        <s-text>
          Extension version: {version}
        </s-text>
      )}
    </s-stack>
  );
}
