import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const productUri = `shopify:point-of-sale/products/7457058783314/variants/42045678780498`;
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    shopify.navigation.canNavigate(productUri).then((result) => {
      setCanNavigate(result);
    });
  }, []);

  const text = canNavigate ? "View featured product" : "No featured product";
  return (
    <s-navigator>
      <s-screen name="Featured" title="Featured">
        <s-scroll-box>
          <s-button
            disabled={!canNavigate}
            onClick={() => {
              shopify.navigation.navigate(productUri);
            }}
          >
            {text}
          </s-button>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
}
