export default function HandlingEvents() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <s-button onClick={handleClick}>Click me</s-button>;
}

// or

export default function HandlingEvents() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  const button = document.createElement('s-button');
  button.addEventListener('click', handleClick);
  document.body.appendChild(button);
}

