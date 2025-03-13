// Basic example for Spinner
export default function extension() {
  const stack = document.createElement('s-stack');
  stack.justifyContent = 'center';
  stack.alignContent = 'center';
  stack.blockSize = '100px';
  document.body.appendChild(stack);

  const spinner = document.createElement('s-spinner');
  spinner.size = 'large';
  stack.appendChild(spinner);

  document.body.appendChild(stack);
}
