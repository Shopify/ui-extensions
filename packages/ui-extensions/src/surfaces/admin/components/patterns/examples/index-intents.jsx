<s-section accessibilityLabel="Empty state with intents">
  <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
    <s-box maxInlineSize="200px" maxBlockSize="200px">
      <s-image
        aspectRatio="1/0.5"
        src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
        alt="Illustration showing product creation"
      />
    </s-box>
    <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
      <s-stack alignItems="center">
        <s-heading>No products yet</s-heading>
        <s-paragraph>
          Add products from your Shopify catalog to get started with quality auditing.
        </s-paragraph>
      </s-stack>
      <s-button-group>
        <s-button
          slot="secondary-actions"
          onClick={() => {
            shopify.intents.invoke('browse:shopify/Product');
          }}
        >
          Browse products
        </s-button>
        <s-button
          slot="primary-action"
          onClick={async () => {
            const activity = await shopify.intents.invoke('create:shopify/Product');
            const response = await activity.complete;
            if (response.code === 'ok') {
              shopify.toast.show('Product created');
            }
          }}
        >
          Create product
        </s-button>
      </s-button-group>
    </s-grid>
  </s-grid>
</s-section>
