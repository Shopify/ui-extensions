<s-box>
  {/* Modal that will be controlled by the buttons */}
  <s-modal id="example-modal" heading="Product Details">
    <s-text>
      This modal is controlled using the commands API. No JavaScript event
      handlers are needed—the browser handles all interactions automatically.
    </s-text>

    <s-stack slot="primaryAction">
      {/* Button inside modal that can hide it */}
      <s-button commandFor="example-modal" command="--hide">
        Close
      </s-button>
    </s-stack>
  </s-modal>

  {/* Button controls using different command actions */}
  <s-stack gap="small">
    <s-heading>Modal Controls</s-heading>

    {/* Toggle button - most common use case */}
    <s-button
      commandFor="example-modal"
      command="--toggle"
      variant="primary">
      Toggle Modal
    </s-button>

    {/* Explicit show button */}
    <s-button
      commandFor="example-modal"
      command="--show"
      tone="success">
      Show Modal
    </s-button>

    {/* Explicit hide button */}
    <s-button
      commandFor="example-modal"
      command="--hide"
      tone="critical">
      Hide Modal
    </s-button>

    {/* Auto command (default) - performs the most appropriate action */}
    <s-button
      commandFor="example-modal"
      command="--auto">
      Auto Command (Toggle)
    </s-button>
  </s-stack>
</s-box>
