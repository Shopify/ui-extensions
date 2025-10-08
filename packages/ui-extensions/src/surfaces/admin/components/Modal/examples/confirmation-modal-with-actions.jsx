<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>