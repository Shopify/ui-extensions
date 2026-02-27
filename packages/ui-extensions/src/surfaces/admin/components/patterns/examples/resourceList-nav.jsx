<s-section padding="none">
  <s-stack gap="small-200">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base" paddingBlockStart="base">
      <s-text-field icon="search" placeholder="Filter customers"></s-text-field>
    </s-grid>
    
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base">
      <s-text>Showing 2 customers</s-text>
      <s-select>
        <s-option value="newest">Newest update</s-option>
        <s-option value="oldest">Oldest update</s-option>
      </s-select>
    </s-grid>
    
    <s-stack>
      <s-clickable
        href="/app/customers/mae-jemison"
        borderStyle="solid none none none"
        border="base"
        paddingInline="base"
        paddingBlock="small"
      >
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Mae Jemison</s-heading>
              <s-text>Decatur, USA</s-text>
            </s-stack>
          </s-stack>
          <s-icon type="chevron-right" />
        </s-grid>
      </s-clickable>
      <s-clickable
        href="/app/customers/ellen-ochoa"
        borderStyle="solid none none none"
        border="base"
        paddingInline="base"
        paddingBlock="small"
      >
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Ellen Ochoa</s-heading>
              <s-text>Los Angeles, USA</s-text>
            </s-stack>
          </s-stack>
          <s-icon type="chevron-right" />
        </s-grid>
      </s-clickable>
    </s-stack>
  </s-stack>
</s-section>
