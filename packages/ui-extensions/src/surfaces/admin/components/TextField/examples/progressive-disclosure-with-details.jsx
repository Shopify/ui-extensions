<s-stack gap="base">
  {/* Essential details only */}
  <s-text-field
    label="Meta title"
    maxLength={60}
    details="Appears in search results and browser tabs"
   />

  {/* Avoid overwhelming details */}
  <s-text-field
    label="Product handle"
    details="Used in product URLs. Once set, changing this may affect SEO and existing links."
   />
</s-stack>