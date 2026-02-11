<s-section padding="none" accessibilityLabel="Puzzles table section">
  <s-table>
    <s-grid slot="filters" gap="small-200" gridTemplateColumns="1fr auto">
      <s-text-field
        label="Search puzzles"
        labelAccessibilityVisibility="exclusive"
        icon="search"
        placeholder="Searching all puzzles"
      />
      <s-button
        icon="sort"
        variant="secondary"
        accessibilityLabel="Sort"
        commandFor="sort-actions"
      />
      <s-popover id="sort-actions">
        <s-stack gap="none">
          <s-box padding="small">
            <s-choice-list label="Sort by" name="Sort by">
              <s-choice value="puzzle-name" selected>Puzzle name</s-choice>
              <s-choice value="pieces">Pieces</s-choice>
            </s-choice-list>
          </s-box>
        </s-stack>
      </s-popover>
    </s-grid>
    <s-table-header-row>
      <s-table-header listSlot="primary">Puzzle</s-table-header>
      <s-table-header format="numeric">Pieces</s-table-header>
      <s-table-header listSlot="secondary">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-clickable
              href="/app/puzzles/mountain-view"
              accessibilityLabel="View Mountain View puzzle"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/29/80/80"
              />
            </s-clickable>
            <s-link href="/app/puzzles/mountain-view">Mountain View</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>16</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-clickable
              href="/app/puzzles/ocean-sunset"
              accessibilityLabel="View Ocean Sunset puzzle"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/12/80/80"
              />
            </s-clickable>
            <s-link href="/app/puzzles/ocean-sunset">Ocean Sunset</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>9</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
