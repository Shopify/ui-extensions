export default function HandlingEvents() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <Button onClick={handleClick}>Click me</Button>;
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

