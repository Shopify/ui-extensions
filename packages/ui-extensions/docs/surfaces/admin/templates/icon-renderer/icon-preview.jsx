const icons = "__ICON_LIST__";

const styles = `
  html, html.Mode-Light {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --border-base: #e1e3e5;
    --border-focus: #303030;
    --border-icon-item: rgba(0, 0, 0, 0.08);
    --surface-base: #ffffff;
    --surface-secondary: #f6f6f7;
    --surface-hover: #f1f2f3;
    --surface-disabled: #fafbfb;
    --text-primary: #202223;
    --text-subdued: #6d7175;
    --text-disabled: #8c9196;
    --shadow-icon-item: rgba(0, 0, 0, 0.05);
  }

  html.Mode-Dark {
    --border-base: #505256;
    --border-focus: #ffffff;
    --border-icon-item: rgba(255, 255, 255, 0.1);
    --surface-base: #202124;
    --surface-secondary: #303034;
    --surface-hover: #404044;
    --surface-disabled: #202124;
    --text-primary: #e3e5e7;
    --text-subdued: #999f9f;
    --text-disabled: #6d7175;
    --shadow-icon-item: rgba(0, 0, 0, 0.3);
  }

  .icon-container {
    border: 1px solid var(--border-base);
    padding: 16px;
    border-radius: 8px;
  }

  .icon-stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .search-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .search-field {
    flex: 1;
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
    opacity: 0.6;
  }

  .search-input {
    width: 100%;
    padding: 8px 12px 8px 36px;
    border: 1.5px solid var(--border-base);
    border-radius: 8px;
    background: var(--surface-base);
    color: var(--text-primary);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .search-input:focus {
    border-color: var(--border-focus);
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    .icon-grid {
      grid-template-columns: 1fr;
    }
  }

  .icon-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: var(--surface-secondary);
    border: 1px solid var(--border-icon-item);
    border-radius: 8px;
    box-shadow: 0 2px 0px var(--shadow-icon-item);
    transition: background-color 0.2s linear, border-color 0.2s linear;
    font-family: "JetBrains Mono", Monaco, Consolas, "Lucida Console", monospace
  
  }

  .icon-item:hover {
    background: var(--surface-hover);
  }

  .icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .icon-name {
    font-size: 13px;
    color: var(--text-primary);
  }

  .empty-state {
    text-align: center;
    padding: 32px;
    color: var(--text-subdued);
    grid-column: 1 / -1;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .pagination-button {
    padding: 8px 16px;
    border: 1px solid var(--border-base);
    border-radius: 6px;
    background: var(--surface-base);
    color: var(--text-primary);
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .pagination-button:hover:not(:disabled) {
    background: var(--surface-hover);
  }

  .pagination-button:disabled {
    background: var(--surface-disabled);
    color: var(--text-disabled);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .pagination-text {
    font-size: 14px;
    color: var(--text-primary);
    margin: 0 8px;
  }
`;

function getIconColorVarName(iconElement) {
  const shadowRoot = iconElement.shadowRoot;
  if (!shadowRoot) return null;
  
  for (const sheet of shadowRoot.adoptedStyleSheets || []) {
    try {
      for (const rule of sheet.cssRules || []) {
        if (rule.style && rule.style.cssText) {
          const match = rule.style.cssText.match(/--s-icon-color-(\d+)/);
          if (match) {
            return `--s-icon-color-${match[1]}`;
          }
        }
      }
    } catch (e) {}
  }
  
  return null;
}

const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

const pageSize = isMobile ? 6 : 10;

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

useEffect(() => {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'theme') {
      const isDark = event.data.mode === 'dark';
      document.documentElement.classList.toggle('Mode-Dark', isDark);
      document.documentElement.classList.toggle('Mode-Light', !isDark);
    }
  });
}, []);

useEffect(() => {
  const handleResize = () => {
    const mobile = window.innerWidth <= 480;
    if (mobile !== isMobile) {
      setIsMobile(mobile);
      setCurrentPage(1);
    }
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [isMobile]);

useEffect(() => {
  const applyIconColors = () => {
    const isDark = document.documentElement.classList.contains('Mode-Dark');
    const icons = document.querySelectorAll('s-icon');
    
    icons.forEach((icon) => {
      const varName = getIconColorVarName(icon);
      if (varName) {
        icon.style.setProperty(varName, isDark ? 'white' : '');
      }
    });
  };

  // Apply on mount and when icons/theme change
  applyIconColors();
  
  // Watch for theme changes
  const themeObserver = new MutationObserver(applyIconColors);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
  return () => {
    themeObserver.disconnect();
  };
}, []);

return (
  <>
    <style>{styles}</style>
    <div className="icon-container">
      <div className="icon-stack">
        <div className="search-row">
          <div className="search-field">
            <div className="icon search-icon">
              <s-icon type="search" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onInput={handleSearchChange}
              placeholder="Search icons..."
              aria-label="Search"
              className="search-input"
            />
          </div>
        </div>

        {currentIcons.length > 0 ? (
          <div className="icon-grid">
            {currentIcons.map((icon) => (
              <div key={icon} className="icon-item">
                <div className="icon">
                  <s-icon type={icon} />
                </div>
                <div className="icon-name">{icon}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="icon-grid">
            <div className="empty-state">
              No icons found matching "{searchQuery}"
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Previous
            </button>
            <span className="pagination-text">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  </>
)
