const [currentPage, setCurrentPage] = useState(1);
const totalPages = 3;

const puzzlesByPage = {
  1: [
    {id: 'mountain-view', name: 'Mountain View', pieces: 16, created: 'Jan 15', status: 'Active', img: 29},
    {id: 'ocean-sunset', name: 'Ocean Sunset', pieces: 9, created: 'Jan 14', status: 'Active', img: 12},
    {id: 'forest-animals', name: 'Forest Animals', pieces: 25, created: 'Jan 12', status: 'Draft', img: 324},
  ],
  2: [
    {id: 'city-skyline', name: 'City Skyline', pieces: 36, created: 'Jan 10', status: 'Active', img: 1031},
    {id: 'autumn-leaves', name: 'Autumn Leaves', pieces: 16, created: 'Jan 8', status: 'Active', img: 167},
    {id: 'northern-lights', name: 'Northern Lights', pieces: 49, created: 'Jan 5', status: 'Draft', img: 360},
  ],
  3: [
    {id: 'tropical-beach', name: 'Tropical Beach', pieces: 9, created: 'Jan 3', status: 'Active', img: 1015},
    {id: 'snowy-mountains', name: 'Snowy Mountains', pieces: 64, created: 'Dec 28', status: 'Active', img: 870},
    {id: 'flower-garden', name: 'Flower Garden', pieces: 25, created: 'Dec 22', status: 'Archived', img: 106},
  ],
};

const currentPuzzles = puzzlesByPage[currentPage];

const handlePreviousPage = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};

const handleNextPage = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};

return (
  <s-section padding="none" accessibilityLabel="Puzzles table with pagination">
    <s-table
      paginate
      hasPreviousPage={currentPage > 1}
      hasNextPage={currentPage < totalPages}
      onPreviousPage={handlePreviousPage}
      onNextPage={handleNextPage}
      paginationLabel={`Page ${currentPage} of ${totalPages}`}
    >
      <s-grid slot="filters" gap="small-200" gridTemplateColumns="1fr auto">
        <s-text-field
          label="Search puzzles"
          labelAccessibilityVisibility="exclusive"
          icon="search"
          placeholder="Searching all puzzles"
        />
        <s-button icon="sort" variant="secondary" accessibilityLabel="Sort" />
      </s-grid>

      <s-table-header-row>
        <s-table-header listSlot="primary">Puzzle</s-table-header>
        <s-table-header format="numeric">Pieces</s-table-header>
        <s-table-header>Created</s-table-header>
        <s-table-header listSlot="secondary">Status</s-table-header>
      </s-table-header-row>

      <s-table-body>
        {currentPuzzles.map((puzzle) => (
          <s-table-row key={puzzle.id}>
            <s-table-cell>
              <s-stack direction="inline" gap="small" alignItems="center">
                <s-box border="base" borderRadius="base" overflow="hidden" inlineSize="40px" blockSize="40px">
                  <s-image objectFit="cover" src={`https://picsum.photos/id/${puzzle.img}/80/80`} />
                </s-box>
                <s-link href="">{puzzle.name}</s-link>
              </s-stack>
            </s-table-cell>
            <s-table-cell>{puzzle.pieces}</s-table-cell>
            <s-table-cell>{puzzle.created}</s-table-cell>
            <s-table-cell>
              <s-badge
                color="base"
                tone={puzzle.status === 'Active' ? 'success' : puzzle.status === 'Draft' ? 'neutral' : 'info'}
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
