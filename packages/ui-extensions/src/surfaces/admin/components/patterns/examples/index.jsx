// ===
// Index page pattern
// ===

export default function IndexPage() {
  return (
    <s-page>
      {/* === */}
      {/* Title Bar */}
      {/* Note: ui-title-bar requires AppBridge to render correctly */}
      {/* === */}
      <ui-title-bar title="Puzzles">
        <button variant="primary">Create puzzle</button>
        <button>Export puzzles</button>
        <button>Import puzzles</button>
      </ui-title-bar>

      {/* === */}
      {/* Empty state */}
      {/* This should only be visible if the merchant has not created any puzzles yet. */}
      {/* === */}
      <s-section accessibilityLabel="Empty state section">
        <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
          <s-box maxInlineSize="200px" maxBlockSize="200px">
            <s-image
              aspectRatio="1/0.5"
              src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
              alt="A stylized graphic of four characters, each holding a puzzle piece"
            />
          </s-box>
          <s-grid
            justifyItems="center"
          >
            <s-heading>Start creating puzzles</s-heading>
            <s-paragraph>
              Create and manage your collection of puzzles for players to enjoy.
            </s-paragraph>
            <s-stack
              gap="small-200"
              justifyContent="center"
              padding="base"
              paddingBlockEnd="none"
              direction="inline"
            >
              <s-button aria-label="Learn more about creating puzzles">
                Learn more
              </s-button>
              <s-button variant="primary" aria-label="Add a new puzzle">
                Create puzzle
              </s-button>
            </s-stack>
          </s-grid>
        </s-grid>
      </s-section>

      {/* === */}
      {/* Table */}
      {/* This should only be visible if the merchant has created one or more puzzles. */}
      {/* === */}
      <s-section padding="none" accessibilityLabel="Puzzles table section">
        <s-table>
          <s-table-header-row>
            <s-table-header listSlot="primary">Puzzle</s-table-header>
            <s-table-header>Type</s-table-header>
            <s-table-header>Created</s-table-header>
            <s-table-header>Status</s-table-header>
          </s-table-header-row>
          <s-table-body>
            <s-table-row>
              <s-table-cell>
                <s-stack direction="inline" gap="small" alignItems="center">
                  <s-clickable
                    href="/app/details"
                    accessibilityLabel="Mountain View puzzle thumbnail"
                    border="base"
                    borderRadius="base"
                    overflow="hidden"
                    inlineSize="40px"
                    blockSize="40px"
                  >
                    <s-image
                      objectFit="cover"
                      src="https://picsum.photos/id/29/80/80"
                    ></s-image>
                  </s-clickable>
                  <s-link href="/app/details">Mountain View</s-link>
                </s-stack>
              </s-table-cell>
              <s-table-cell>16-piece</s-table-cell>
              <s-table-cell>Today</s-table-cell>
              <s-table-cell>
                <s-badge color="base" tone="success">
                  Active
                </s-badge>
              </s-table-cell>
            </s-table-row>
            <s-table-row>
              <s-table-cell>
                <s-stack direction="inline" gap="small" alignItems="center">
                  <s-clickable
                    href="/app/details"
                    accessibilityLabel="Ocean Sunset puzzle thumbnail"
                    border="base"
                    borderRadius="base"
                    overflow="hidden"
                    inlineSize="40px"
                    blockSize="40px"
                  >
                    <s-image
                      objectFit="cover"
                      src="https://picsum.photos/id/12/80/80"
                    ></s-image>
                  </s-clickable>
                  <s-link href="/app/details">Ocean Sunset</s-link>
                </s-stack>
              </s-table-cell>
              <s-table-cell>9-piece</s-table-cell>
              <s-table-cell>Yesterday</s-table-cell>
              <s-table-cell>
                <s-badge color="base" tone="success">
                  Active
                </s-badge>
              </s-table-cell>
            </s-table-row>
            <s-table-row>
              <s-table-cell>
                <s-stack direction="inline" gap="small" alignItems="center">
                  <s-clickable
                    href="/app/details"
                    accessibilityLabel="Forest Animals puzzle thumbnail"
                    border="base"
                    borderRadius="base"
                    overflow="hidden"
                    inlineSize="40px"
                    blockSize="40px"
                  >
                    <s-image
                      objectFit="cover"
                      src="https://picsum.photos/id/324/80/80"
                    ></s-image>
                  </s-clickable>
                  <s-link href="/app/details">Forest Animals</s-link>
                </s-stack>
              </s-table-cell>
              <s-table-cell>25-piece</s-table-cell>
              <s-table-cell>Last week</s-table-cell>
              <s-table-cell>
                <s-badge color="base" tone="neutral">
                  Draft
                </s-badge>
              </s-table-cell>
            </s-table-row>
            {/* Add more rows as needed here */}
            {/* If more than 100 rows are needed, index page tables should use the paginate, hasPreviousPage, hasNextPage, onPreviousPage, and onNextPage attributes to display and handle pagination) */}
          </s-table-body>
        </s-table>
      </s-section>
    </s-page>
  );
}
