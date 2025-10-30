<s-choice-list
  onChange={(event) => console.log('onChange:', event.currentTarget.values)}
  onInput={(event) => console.log('onInput:', event.currentTarget.values)}
>
  <s-choice value="option1">Option 1</s-choice>
  <s-choice value="option2" disabled>Option 2 (disabled)</s-choice>
  <s-choice value="option3">Option 3</s-choice>
</s-choice-list>