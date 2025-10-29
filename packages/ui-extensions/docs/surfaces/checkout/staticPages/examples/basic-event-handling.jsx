<s-button onClick={() => console.log('Clicked!')}>
  Inline Handler
</s-button>

<s-button onClick={(event) => {
  console.log('Event details:', event.type);
  console.log('Target:', event.currentTarget);
}}>
  With Event Object
</s-button>
