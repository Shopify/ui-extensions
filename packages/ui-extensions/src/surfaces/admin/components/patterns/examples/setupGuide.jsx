const [expanded, setExpanded] = useState({
  guide: true,
  step1: true,
  step2: false,
  step3: false,
});

return (
<s-section>
  <s-grid gap="base">
    <s-grid gap="small-200">
      <s-grid
        gridTemplateColumns="1fr auto auto"
        gap="small-300"
        alignItems="center"
      >
        <s-heading>Setup Guide</s-heading>
        <s-button
          accessibilityLabel="Dismiss Guide"
          variant="tertiary"
          tone="neutral"
          icon="x"
         />
        <s-button
          accessibilityLabel="Toggle setup guide"
          variant="tertiary"
          tone="neutral"
          onClick={() => setExpanded({ ...expanded, guide: !expanded.guide })}
          icon={expanded.guide ? "chevron-up" : "chevron-down"}
         />
      </s-grid>
      <s-paragraph>
        Use this personalized guide to get your store ready for sales.
      </s-paragraph>
      <s-paragraph color="subdued">0 out of 3 steps completed</s-paragraph>
    </s-grid>
    <s-box
      borderRadius="base"
      border="base"
      background="base"
      display={expanded.guide ? "auto" : "none"}
    >
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Upload an image for your puzzle" />
          <s-button
            accessibilityLabel="Toggle step 1 details"
            variant="tertiary"
            onClick={() => setExpanded({ ...expanded, step1: !expanded.step1 })}
            icon={expanded.step1 ? "chevron-up" : "chevron-down"}
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
          display={expanded.step1 ? "auto" : "none"}
        >
          <s-box padding="base" background="subdued" borderRadius="base">
            <s-grid
              gridTemplateColumns="1fr auto"
              gap="base"
              alignItems="center"
            >
              <s-grid gap="small-200">
                <s-paragraph>
                  Start by uploading a high-quality image that will be used to
                  create your puzzle. For best results, use images that are at
                  least 1200x1200 pixels.
                </s-paragraph>
                <s-stack direction="inline" gap="small-200">
                  <s-button variant="primary">Upload image</s-button>
                  <s-button variant="tertiary" tone="neutral">
                    {" "}
                    Image requirements{" "}
                  </s-button>
                </s-stack>
              </s-grid>
              <s-box maxBlockSize="80px" maxInlineSize="80px">
                <s-image
                  src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                  alt="Customize checkout illustration"
                 />
              </s-box>
            </s-grid>
          </s-box>
        </s-box>
      </s-box>
      <s-divider />
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Choose a puzzle template" />
          <s-button
            accessibilityLabel="Toggle step 2 details"
            variant="tertiary"
            onClick={() => setExpanded({ ...expanded, step2: !expanded.step2 })}
            icon={expanded.step2 ? "chevron-up" : "chevron-down"}
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
          display={expanded.step2 ? "auto" : "none"}
        >
          <s-box padding="base" background="subdued" borderRadius="base">
            <s-grid
              gridTemplateColumns="1fr auto"
              gap="base"
              alignItems="center"
            >
              <s-grid gap="small-200">
                <s-paragraph>
                  Choose from our library of puzzle templates including classic
                  jigsaw, hexagonal, and irregular shapes.
                </s-paragraph>
                <s-stack direction="inline" gap="small-200">
                  <s-button variant="primary">Browse templates</s-button>
                </s-stack>
              </s-grid>
              <s-box maxBlockSize="80px" maxInlineSize="80px">
                <s-image
                  src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                  alt="Template selection illustration"
                 />
              </s-box>
            </s-grid>
          </s-box>
        </s-box>
      </s-box>
      <s-divider />
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Customize puzzle piece shapes" />
          <s-button
            accessibilityLabel="Toggle step 3 details"
            variant="tertiary"
            onClick={() => setExpanded({ ...expanded, step3: !expanded.step3 })}
            icon={expanded.step3 ? "chevron-up" : "chevron-down"}
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
          display={expanded.step3 ? "auto" : "none"}
        >
          <s-box padding="base" background="subdued" borderRadius="base">
            <s-grid
              gridTemplateColumns="1fr auto"
              gap="base"
              alignItems="center"
            >
              <s-grid gap="small-200">
                <s-paragraph>
                  Fine-tune the shape and interlocking style of your puzzle
                  pieces for a unique experience.
                </s-paragraph>
                <s-stack direction="inline" gap="small-200">
                  <s-button variant="primary">Customize shapes</s-button>
                </s-stack>
              </s-grid>
              <s-box maxBlockSize="80px" maxInlineSize="80px">
                <s-image
                  src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                  alt="Customization illustration"
                 />
              </s-box>
            </s-grid>
          </s-box>
        </s-box>
      </s-box>
    </s-box>
  </s-grid>
</s-section>
)
