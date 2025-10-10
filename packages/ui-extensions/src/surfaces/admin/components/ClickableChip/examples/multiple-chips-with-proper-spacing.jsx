<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>