import { useState } from 'react';

function ProductForm() {
  const [productName, setProductName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product name:', productName);
  };

  return (
    <s-section heading="Add Product">
      <form onSubmit={handleSubmit}>
        <s-stack gap="base">
          <s-text-field
            label="Product name"
            value={productName}
            onChange={(e) => setProductName(e.currentTarget.value)}
            required
          />
          <s-button variant="primary" type="submit">
            Save product
          </s-button>
        </s-stack>
      </form>
    </s-section>
  );
}
