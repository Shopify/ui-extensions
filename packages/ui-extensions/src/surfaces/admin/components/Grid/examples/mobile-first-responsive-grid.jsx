<s-stack gap="base">
  {/* Automatically responsive: 6 columns on mobile, 12 on desktop */}
  <s-grid gap="base">
    <s-grid-item gridColumn="span 6" gridRow="span 1">
      <s-section>
        <s-text>Full width on mobile, half on desktop</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 3" gridRow="span 1">
      <s-section>
        <s-text>Half width on mobile, quarter on desktop</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 3" gridRow="span 1">
      <s-section>
        <s-text>Half width on mobile, quarter on desktop</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>
