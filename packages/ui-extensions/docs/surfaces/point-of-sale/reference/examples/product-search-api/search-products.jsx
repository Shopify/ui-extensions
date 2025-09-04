import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [searchResults, setSearchResults] = useState([]);

  const search = async (queryString) => {
    const results = await shopify.productSearch.searchProducts({queryString});
    setSearchResults(results.items);
  };

  return (
    <s-navigator initial-screen-name="HelloWorld">
      <s-screen name="HelloWorld" title="Hello World!">
        <s-scroll-box>
          <s-search-field
            placeholder="Search products"
            onTextChange={search}
            onSearch={search}
          />
          <s-text>Found {searchResults.length} products</s-text>
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
