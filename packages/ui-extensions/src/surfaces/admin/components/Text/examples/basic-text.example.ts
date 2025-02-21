export default function extension() {
  const stack = document.createElement('s-stack');
  stack.direction = 'block';
  stack.gap = true;

  const label = document.createElement('s-text');
  label.type = 'strong';
  label.textContent = 'Name:';
  stack.appendChild(label);

  const name = document.createElement('s-text');
  name.textContent = 'Jane Doe';
  stack.appendChild(name);

  document.body.appendChild(stack);
}
