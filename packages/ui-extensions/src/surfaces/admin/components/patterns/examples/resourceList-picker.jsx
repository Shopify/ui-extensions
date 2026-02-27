<s-section padding="none">
  <s-stack gap="small-200">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base" paddingBlockStart="base">
      <s-text-field icon="search" placeholder="Filter products"></s-text-field>
      <s-button
        onClick={async () => {
          const selected = await shopify.resourcePicker({
            type: 'product',
            multiple: true,
          });
          if (selected) {
            console.log('Selected products:', selected);
          }
        }}
      >
        Add products
      </s-button>
    </s-grid>
    
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base">
      <s-text>Showing 2 products</s-text>
      <s-select>
        <s-option value="newest">Newest</s-option>
        <s-option value="oldest">Oldest</s-option>
      </s-select>
    </s-grid>
    
    <s-stack>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="auto 1fr auto" gap="base" alignItems="center">
          <s-thumbnail
            size="small"
            src="https://picsum.photos/id/29/80/80"
            alt="Mountain View puzzle"
          />
          <s-stack>
            <s-heading>Mountain View</s-heading>
            <s-text>16 pieces</s-text>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Mountain View" />
        </s-grid>
      </s-clickable>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="auto 1fr auto" gap="base" alignItems="center">
          <s-thumbnail
            size="small"
            src="https://picsum.photos/id/12/80/80"
            alt="Ocean Sunset puzzle"
          />
          <s-stack>
            <s-heading>Ocean Sunset</s-heading>
            <s-text>9 pieces</s-text>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Ocean Sunset" />
        </s-grid>
      </s-clickable>
    </s-stack>
  </s-stack>
</s-section>
