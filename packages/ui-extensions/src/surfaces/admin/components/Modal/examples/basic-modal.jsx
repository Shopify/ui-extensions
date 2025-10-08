<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>