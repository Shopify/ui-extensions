// Number field example - values are strings
<s-number-field
  label="Quantity"
  name="quantity"
  onChange={(e) => {
    // e.currentTarget.value is a string, convert if needed
    const quantity = Number(e.currentTarget.value);
    console.log('Quantity as number:', quantity);
  }}
/>

// Multi-select example - values is an array of strings
<s-choice-list
  name="colors"
  label="Colors"
  multiple
  onChange={(e) => {
    // e.currentTarget.values is an array of strings
    console.log('Selected colors:', e.currentTarget.values);
  }}
>
  <s-choice label="Red" value="red" />
  <s-choice label="Blue" value="blue" />
  <s-choice label="Green" value="green" />
</s-choice-list>
