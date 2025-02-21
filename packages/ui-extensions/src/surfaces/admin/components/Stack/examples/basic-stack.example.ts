export default function extension() {
  const stack = document.createElement('s-stack');
  stack.direction = 'block';
  stack.gap = true;
  stack.append('Child 1', 'Child 2', 'Child 3', 'Child 4');
  document.body.appendChild(stack);
}
