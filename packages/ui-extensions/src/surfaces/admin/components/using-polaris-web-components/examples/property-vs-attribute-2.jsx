<>
// This works - the "gap" property accepts string values
<s-stack gap="base">...</s-stack>

// This works - the "checked" property accepts boolean values
<s-checkbox checked={true}>...</s-checkbox>

// This does not work - complex values are set as properties
<s-choice-list values={['Shopify', 'Shopify Plus']}>...</s-choice-list>
</>
