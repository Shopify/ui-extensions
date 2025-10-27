<s-section accessibilityLabel="Empty state section">
  <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
    <s-box maxInlineSize="200px" maxBlockSize="200px">
      {/* aspectRatio should match the actual image dimensions (width/height) */}
      <s-image
        aspectRatio="1/0.5"
        src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
        alt="A stylized graphic of four characters, each holding a puzzle piece"
      />
    </s-box>
    <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
      <s-stack alignItems="center">
        <s-heading>Start creating puzzles</s-heading>
        <s-paragraph>
          Create and manage your collection of puzzles for players to enjoy.
        </s-paragraph>
      </s-stack>
      <s-button-group>
        <s-button
          slot="secondary-actions"
          aria-label="Learn more about creating puzzles"
        >
          {" "}
          Learn more{" "}
        </s-button>
        <s-button slot="primary-action" aria-label="Add a new puzzle">
          {" "}
          Create puzzle{" "}
        </s-button>
      </s-button-group>
    </s-grid>
  </s-grid>
</s-section>