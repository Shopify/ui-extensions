<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>