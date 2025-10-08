<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>