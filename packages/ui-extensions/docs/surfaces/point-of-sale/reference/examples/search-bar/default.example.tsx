import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="SearchBar" title="SearchBar">
          <s-scroll-view>
            <s-search-bar
              onSearch={setSearched}
              editable
              initialValue="initial value"
              placeholder="placeholder"
            />
            <s-text>Searched: {searched}</s-text>
          </s-scroll-view>
        </s-screen>
  );
}