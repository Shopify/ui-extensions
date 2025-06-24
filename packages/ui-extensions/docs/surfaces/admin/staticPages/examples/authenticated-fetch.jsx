import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
}

// Get product info from app backend
async function getProductInfo(id) {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
}

function Extension() {
  // Contextual "input" data passed to this extension:
  const {data} = shopify;
  const productId = data.selected?.[0]?.id;

  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    getProductInfo(productId).then(setProductInfo);
  }, [productId]);

  return (
    <s-admin-block title="Product Info">
      <s-text>Info: {productInfo?.title}</s-text>
    </s-admin-block>
  );
}
