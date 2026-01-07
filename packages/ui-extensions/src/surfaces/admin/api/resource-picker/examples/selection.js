const selectedProducts = await resourcePicker({
  type: 'product',
});

if (selectedProducts) {
  console.log('Selected products:', selectedProducts);
  selectedProducts.forEach((product) => {
    console.log('Product ID:', product.id);
    console.log('Product title:', product.title);
  });
}

