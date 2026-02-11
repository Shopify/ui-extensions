<s-grid justifyItems="center" alignItems="center" minBlockSize="200px">
  <s-button
    tone="critical"
    commandFor="delete-modal"
    command="--show"
  >
    Delete
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack direction="block" gap="base">
      <s-text>
        Are you sure you want to delete this product? This action cannot be undone.
      </s-text>
      <s-banner tone="warning">
        <s-text>
          This will permanently remove the product and all associated data.
        </s-text>
      </s-banner>
    </s-stack>
    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      onClick={() => {
        console.log("Product deleted");
      }}
    >
      Delete
    </s-button>
    <s-button
      slot="secondary-actions"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-grid>
