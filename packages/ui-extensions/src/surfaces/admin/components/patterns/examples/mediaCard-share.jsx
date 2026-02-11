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
      variant="tertiary"
      icon="share"
      accessibilityLabel="Share 4-pieces puzzle template"
      onClick={async () => {
        try {
          await navigator.share({
            text: 'Check out this puzzle template!',
            url: 'https://example.com/puzzles/4-pieces',
          });
        } catch (err) {
          console.log('Share cancelled or failed');
        }
      }}
    />
  </s-grid>
</s-box>
