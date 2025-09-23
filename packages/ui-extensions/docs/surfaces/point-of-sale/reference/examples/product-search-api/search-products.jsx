import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [searchResults, setSearchResults] = useState([]);

  const search = async (event) => {
    const results = await shopify.productSearch.searchProducts({queryString: event.target.value});
    setSearchResults(results.items);
  };

  return (
    <s-page heading="Hello World!">
      <s-scroll-box>
        <s-search-field
          placeholder="Search products"
          onInput={search}
        />
        <s-text>Found {searchResults.length} products</s-text>
      </s-scroll-box>
    </s-page>
  );
};
