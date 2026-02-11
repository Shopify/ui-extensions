const puzzles = [
  { id: 'mountain-view', name: 'Mountain View', pieces: 16, created: 'Today', status: 'Active', image: 'https://picsum.photos/id/29/80/80' },
  { id: 'ocean-sunset', name: 'Ocean Sunset', pieces: 9, created: 'Yesterday', status: 'Active', image: 'https://picsum.photos/id/12/80/80' },
  { id: 'forest-animals', name: 'Forest Animals', pieces: 25, created: 'Last week', status: 'Draft', image: 'https://picsum.photos/id/324/80/80' },
];

const [selectedIds, setSelectedIds] = useState([]);

const allSelected = selectedIds.length === puzzles.length;
const someSelected = selectedIds.length > 0 && selectedIds.length < puzzles.length;
const noneSelected = selectedIds.length === 0;

const handleSelectAll = () => {
  if (allSelected) {
    setSelectedIds([]);
  } else {
    setSelectedIds(puzzles.map(p => p.id));
  }
};

const handleSelectRow = (id) => {
  if (selectedIds.includes(id)) {
    setSelectedIds(selectedIds.filter(i => i !== id));
  } else {
    setSelectedIds([...selectedIds, id]);
  }
};

const handleBulkAction = (action) => {
  console.log(`${action} items:`, selectedIds);
  // Perform bulk action here
};

return (
  <s-section padding="none" accessibilityLabel="Puzzles table with bulk selection">
    <s-table>
      {/* Bulk action bar - appears when items are selected */}
      {!noneSelected && (
        <s-box slot="filters" padding="small" background="strong">
          <s-stack direction="inline" gap="base" alignItems="center" justifyContent="space-between">
            <s-text fontWeight="semibold">
              {selectedIds.length} of {puzzles.length} selected
            </s-text>
            <s-stack direction="inline" gap="small">
              <s-button variant="secondary" onClick={() => handleBulkAction('edit')}>
                Bulk edit
              </s-button>
              <s-button variant="secondary" tone="critical" onClick={() => handleBulkAction('delete')}>
                Delete
              </s-button>
            </s-stack>
          </s-stack>
        </s-box>
      )}

      {/* Search filters - hidden when bulk action bar is visible */}
      {noneSelected && (
        <s-grid slot="filters" gap="small-200" gridTemplateColumns="1fr auto">
          <s-text-field
            label="Search puzzles"
            labelAccessibilityVisibility="exclusive"
            icon="search"
            placeholder="Searching all puzzles"
          />
          <s-button icon="sort" variant="secondary" accessibilityLabel="Sort">
            Sort
          </s-button>
        </s-grid>
      )}

      <s-table-header-row>
        <s-table-header listSlot="primary">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleSelectAll}
              accessibilityLabel="Select all puzzles"
            />
            <s-text>Puzzle</s-text>
          </s-stack>
        </s-table-header>
        <s-table-header format="numeric">Pieces</s-table-header>
        <s-table-header>Created</s-table-header>
        <s-table-header listSlot="secondary">Status</s-table-header>
      </s-table-header-row>

      <s-table-body>
        {puzzles.map((puzzle) => (
          <s-table-row
            key={puzzle.id}
            selected={selectedIds.includes(puzzle.id)}
            onClick={() => handleSelectRow(puzzle.id)}
          >
            <s-table-cell>
              <s-stack direction="inline" gap="small" alignItems="center">
                <s-checkbox
                  checked={selectedIds.includes(puzzle.id)}
                  onChange={() => handleSelectRow(puzzle.id)}
                  accessibilityLabel={`Select ${puzzle.name}`}
                />
                <s-clickable
                  href=""
                  accessibilityLabel={`${puzzle.name} puzzle thumbnail`}
                  border="base"
                  borderRadius="base"
                  overflow="hidden"
                  inlineSize="40px"
                  blockSize="40px"
                >
                  <s-image objectFit="cover" src={puzzle.image} />
                </s-clickable>
                <s-link href="">{puzzle.name}</s-link>
              </s-stack>
            </s-table-cell>
            <s-table-cell>{puzzle.pieces}</s-table-cell>
            <s-table-cell>{puzzle.created}</s-table-cell>
            <s-table-cell>
              <s-badge
                color="base"
                tone={puzzle.status === 'Active' ? 'success' : 'neutral'}
              >
                {puzzle.status}
              </s-badge>
            </s-table-cell>
          </s-table-row>
        ))}
      </s-table-body>
    </s-table>
  </s-section>
);
