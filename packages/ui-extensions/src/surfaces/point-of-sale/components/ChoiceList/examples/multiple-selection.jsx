<s-choice-list 
  multiple
  values={['small', 'medium']}
  onChange={(event) => console.log('Selected:', event.currentTarget.values)}
>
  <s-choice value="small">Small</s-choice>
  <s-choice value="medium">Medium</s-choice>
  <s-choice value="large">Large</s-choice>
</s-choice-list>