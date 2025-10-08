const handleChange = (event) => {
  console.log('Values: ', event.currentTarget.values)
}

return (
  <s-choice-list
    label="Company name"
    name="Company name"
    details="The company name will be displayed on the checkout page."
    onChange={handleChange}
  >
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required">Required</s-choice>
  </s-choice-list>
)