import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const lines = shopify.lines.value;
  const bundles = lines?.filter(
    (line) => line.lineComponents.length > 0,
  );

  if (!bundles || bundles.length === 0) {
    return null;
  }

  return (
    <s-stack>
      {bundles.map((bundle) => (
        <s-box key={bundle.id}>
          <s-text type="strong">
            {bundle.merchandise.title} (Bundle)
          </s-text>
          <s-text>Qty: {bundle.quantity}</s-text>
          <s-divider />
          <s-stack>
            {bundle.lineComponents.map(
              (component) => (
                <s-text key={component.id}>
                  ↳ {component.merchandise.title} ×{' '}
                  {component.quantity}
                </s-text>
              ),
            )}
          </s-stack>
        </s-box>
      ))}
    </s-stack>
  );
}
