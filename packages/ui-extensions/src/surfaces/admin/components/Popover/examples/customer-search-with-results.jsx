const customers = [
  {name: 'Sarah Johnson', email: 'sarah@example.com'},
  {name: 'Mike Chen', email: 'mike.chen@store.com'},
  {name: 'Lisa Park', email: 'lisa.park@email.com'},
];

const handleSearch = (event) => {
  const resultsContainer = document.querySelector('#search-results');
  const countText = document.querySelector('#results-count');

  const query = event.currentTarget.value.toLowerCase();
  const filtered = customers.filter( (c) => c.name.toLowerCase().includes(query) );

  resultsContainer.innerHTML = filtered
    .map(
      (customer) => `
    <s-button variant="tertiary">
      <s-stack gap="small" alignItems="start">
        <s-text type="strong">${customer.name}</s-text>
        <s-text color="subdued">${customer.email}</s-text>
      </s-stack>
    </s-button>
  `,
    )
    .join('');

  countText.textContent = `Showing ${filtered.length} of ${customers.length} customers`;
};

return (
  <>
    <s-button commandFor="customer-search-popover">
      Add existing customer
    </s-button>

    <s-popover id="customer-search-popover">
      <s-section>
        <s-stack gap="base">
          <s-search-field
            label="Search customers"
            name="customerSearch"
            placeholder="Name, email, or phone"
            onInput={handleSearch}
          />

          <s-divider />

          <s-stack gap="small" id="search-results">
            {customers.map((customer) => (
              <s-button variant="tertiary">
                <s-stack gap="small" alignItems="start">
                  <s-text type="strong">{customer.name}</s-text>
                  <s-text color="subdued">{customer.email}</s-text>
                </s-stack>
              </s-button>
            ))}
          </s-stack>

          <s-divider />

          <s-text color="subdued" id="results-count">
            Showing {customers.length} of {customers.length} customers
          </s-text>
        </s-stack>
      </s-section>
    </s-popover>
  </>
)