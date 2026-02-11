<s-section>
  <s-grid gridTemplateColumns="1fr auto" gap="small-400" alignItems="start">
    <s-grid
      gridTemplateColumns="@container (inline-size <= 480px) 1fr, auto auto"
      gap="base"
      alignItems="center"
    >
      <s-grid gap="small-200">
        <s-heading>New: AI-powered puzzle suggestions</s-heading>
        <s-paragraph>
          Let our AI analyze your images and suggest the perfect puzzle configurations for maximum engagement.
        </s-paragraph>
        <s-stack direction="inline" gap="small-200">
          <s-button href="/app/ai-suggestions">Try it now</s-button>
          <s-button tone="neutral" variant="tertiary" href="/app/settings/ai">
            Learn more
          </s-button>
        </s-stack>
      </s-grid>
      <s-stack alignItems="center">
        <s-box maxInlineSize="200px" borderRadius="base" overflow="hidden">
          <s-image
            src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
            alt="AI suggestions illustration"
            aspectRatio="1/0.5"
          />
        </s-box>
      </s-stack>
    </s-grid>
    <s-button
      icon="x"
      tone="neutral"
      variant="tertiary"
      accessibilityLabel="Dismiss card"
    />
  </s-grid>
</s-section>
