<s-grid justifyItems="center" alignItems="center" minBlockSize="300px">
  <s-box
    border="base"
    borderRadius="base"
    overflow="hidden"
    maxInlineSize="216px"
  >
    <s-clickable href="">
      <s-image
        aspectRatio="1/1"
        objectFit="cover"
        alt="Illustration of characters with a 4-piece puzzle"
        src="https://cdn.shopify.com/static/images/polaris/patterns/4-pieces.png"
      />
    </s-clickable>
    <s-divider />
    <s-grid
      gridTemplateColumns="1fr auto auto"
      background="base"
      padding="small"
      gap="small"
      alignItems="center"
    >
      <s-heading>4-Pieces</s-heading>
      <s-button href="" accessibilityLabel="View 4-pieces puzzle template">
        View
      </s-button>
      <s-button
        tone="critical"
        variant="tertiary"
        icon="delete"
        accessibilityLabel="Delete 4-pieces puzzle"
        commandFor="delete-modal"
        command="--show"
      />
    </s-grid>

    <s-modal id="delete-modal" heading="Delete template?">
      <s-stack direction="block" gap="base">
        <s-text>
          Are you sure you want to delete the 4-Pieces template? This action cannot be undone.
        </s-text>
      </s-stack>
      <s-button
        slot="primary-action"
        variant="primary"
        tone="critical"
        commandFor="delete-modal"
        command="--hide"
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
  </s-box>
</s-grid>
