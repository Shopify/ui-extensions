<s-choice-list>
  {/* Composed choice with image and text */}
  <s-choice value="option1">
    <s-stack gap="small-200" alignItems="center" direction="inline">
      <s-box blockSize="40px" inlineSize="40px">
        <s-image src="https://placehold.co/60x60" inlineSize="fill" objectFit="cover" />
      </s-box>
      <s-box>
        <s-text>Option 1</s-text>
        <s-text type="small" color="subdued">
          Additional details for option 1
        </s-text>
      </s-box>
    </s-stack>
  </s-choice>

  {/* Composed choice with nested text */}
  <s-choice value="option2">
    <s-text type="strong">
      Option 2
      <s-text type="small" color="subdued">
        Additional details for option 2
      </s-text>
    </s-text>
  </s-choice>

  {/* Mix of text and composed elements */}
  <s-choice value="option3" disabled>
    Option 3
    <s-text type="small" color="subdued">
      (disabled)
    </s-text>
    <s-text type="strong">Additional details for option 3</s-text>
  </s-choice>
</s-choice-list>