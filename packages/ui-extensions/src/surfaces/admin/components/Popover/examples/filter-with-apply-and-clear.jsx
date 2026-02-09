<>
  <s-button commandFor="filter-popover" id="filter-btn">Filter</s-button>

  <s-popover id="filter-popover" inlineSize="250px">
    <s-box padding="base">
      <s-stack direction="block" gap="base">
        <s-heading>Filter by status</s-heading>

        <s-choice-list id="status-filter" name="status">
          <s-choice value="all" selected>All products</s-choice>
          <s-choice value="active">Active</s-choice>
          <s-choice value="draft">Draft</s-choice>
        </s-choice-list>

        <s-stack direction="inline" gap="base">
          <s-button variant="primary" id="apply-filter" commandFor="filter-popover" command="--hide">Apply</s-button>
          <s-button id="clear-filter" commandFor="filter-popover" command="--hide">Clear</s-button>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>

// In your component:
// const filterBtn = document.getElementById('filter-btn');
// const choiceList = document.getElementById('status-filter');
//
// document.getElementById('apply-filter').addEventListener('click', () => {
//   const selected = choiceList.value;
//   filterBtn.textContent = selected !== 'all' ? `Filter: ${selected}` : 'Filter';
// });
