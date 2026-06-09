import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [selected, setSelected] = useState([]);

  const parentVariantId = data.selected[0]?.id;

  const handleSelectComponents = async () => {
    const componentVariants = await shopify.resourcePicker({
      type: 'variant',
      multiple: 5,
      action: 'select',
      filter: {
        draft: false,
        archived: false,
      },
    });

    if (componentVariants) {
      setSelected(componentVariants);
      
      await fetch('/api/bundles/configure-variant', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          bundleVariantId: parentVariantId,
          componentVariants: componentVariants.map((v) => ({
            variantId: v.id,
            quantity: 1,
          })),
        }),
      });
    }
  };

  return (
    <s-admin-block heading="Variant Bundle Configuration">
      <s-button onClick={handleSelectComponents}>Select Variant Components</s-button>
      {selected.length > 0 && (
        <s-text>{selected.length} variant components selected</s-text>
      )}
    </s-admin-block>
  );
}
