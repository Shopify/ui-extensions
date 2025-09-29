<s-search-field
  placeholder="Search products..."
  value=""
  onInput={(event) => console.log('Input:', event.target.value)}
  onChange={(event) => console.log('Change:', event.target.value)}
  onFocus={(event) => console.log('Search focused')}
  onBlur={(event) => console.log('Search blurred')}
/>