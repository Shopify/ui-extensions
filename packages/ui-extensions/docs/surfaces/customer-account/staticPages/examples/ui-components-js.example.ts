export default function extension() {
  const stack = document.createElement('s-stack');

  const image = document.createElement('s-image');
  image.src = '/url/for/image';

  const blockStack =
    document.createElement('s-stack');
  blockStack.direction = 'block';

  const textHeading =
    document.createElement('s-text');
  textHeading.type = 'strong';
  textHeading.textContent = 'Heading';

  const textDescription =
    document.createElement('s-text');
  textDescription.type = 'small';
  textDescription.textContent = 'Description';

  blockStack.append(textHeading);
  blockStack.append(textDescription);

  const button =
    document.createElement('s-button');
  button.textContent = 'Button';
  button.onclick = () => {
    console.log('button was pressed');
  };

  stack.append(image);
  stack.append(blockStack);
  stack.append(button);

  document.body.append(stack);
}
