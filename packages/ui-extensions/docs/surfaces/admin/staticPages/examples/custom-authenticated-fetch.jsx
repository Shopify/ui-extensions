import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
}

// Get product info from a different app backend
async function getProductInfo(id, auth) {
  const token = await auth.idToken();
  const res = await fetch(`https://app.example.com/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

function Extension() {
  // Contextual "input" data passed to this extension:
  const {data, auth} = shopify;
  const productId = data.selected?.[0]?.id;

  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    getProductInfo(productId, auth).then(setProductInfo);
  }, [productId, auth]);

  return (
    <s-admin-block title="Product Info">
      <s-text>Info: {productInfo?.title}</s-text>
    </s-admin-block>
  );
}
