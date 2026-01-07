const selectedProducts = await resourcePicker({
  type: 'product',
  filter: {
    hidden: false,
    variants: true,
    draft: false,
    archived: false,
  },
});

