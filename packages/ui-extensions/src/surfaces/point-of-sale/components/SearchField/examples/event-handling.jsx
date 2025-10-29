<s-search-field
  placeholder="Search products..."
  value=""
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Search focused')}
  onBlur={(event) => console.log('Search blurred')}
/>