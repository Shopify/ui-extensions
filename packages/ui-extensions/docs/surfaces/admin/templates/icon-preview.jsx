  const icons = "__ICON_LIST__";
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const filteredIcons = searchQuery
    ? icons.filter((icon) =>
        icon.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : icons;

  const totalPages = Math.ceil(filteredIcons.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentIcons = filteredIcons.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const changePage = (newPage) => {
    setCurrentPage(Math.min(Math.max(newPage, 1), totalPages));
  };

  return (
    <s-box border="base" padding="base" borderRadius="base">
      <s-stack gap="base">
        <s-stack direction="inline" gap="small" alignItems="center">
          <s-search-field
            value={searchQuery}
            onInput={handleSearchChange}
            placeholder="Search icons..."
            label="Search"
            labelAccessibilityVisibility="exclusive"
          />
          <s-text color="subdued">
            {filteredIcons.length}{" "}
            {filteredIcons.length === 1 ? "icon" : "icons"}
          </s-text>
        </s-stack>

        {currentIcons.length > 0 ? (
          <s-grid
            gridTemplateColumns="repeat(2, 1fr)"
            gap="base"
          >
            {currentIcons.map((icon) => (
              <s-section key={icon}>
                <s-stack gap="small-200" direction="inline" alignItems="center">
                  <s-icon type={icon} />
                  <s-paragraph>
                    <s-text>{icon}</s-text>
                  </s-paragraph>
                </s-stack>
              </s-section>
            ))}
          </s-grid>
        ) : (
          <s-stack gap="small" alignItems="center">
            <s-paragraph>
              <s-text>No icons found matching "{searchQuery}"</s-text>
            </s-paragraph>
          </s-stack>
        )}
        {totalPages > 1 && (
          <s-stack
            direction="inline"
            gap="small"
            alignItems="center"
            justifyContent="center"
          >
            <s-button
              onClick={() => changePage(1)}
              disabled={currentPage === 1}
              variant="secondary"
            >
              First
            </s-button>
            <s-button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              variant="secondary"
            >
              Previous
            </s-button>
            <s-text>
              Page {currentPage} of {totalPages}
            </s-text>
            <s-button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="secondary"
            >
              Next
            </s-button>
            <s-button
              onClick={() => changePage(totalPages)}
              disabled={currentPage === totalPages}
              variant="secondary"
            >
              Last
            </s-button>
          </s-stack>
        )}
      </s-stack>
    </s-box>
  )
