const {data, resourcePicker} = useApi(TARGET);

const parentVariantId = data.selected[0]?.id;

const componentVariants = await resourcePicker({
  type: 'variant',
  multiple: 5,
  action: 'select',
  filter: {
    draft: false,
    archived: false,
  },
});

if (componentVariants) {
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
