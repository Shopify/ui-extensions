// Basic example for TextArea
export default function extension() {
  const textArea = document.createElement('s-text-area');
  textArea.label = 'Description';
  textArea.placeholder = 'Describe your resource';
  textArea.rows = 4;
  textArea.maxLength = 1000;

  textArea.addEventListener('input', (event) => {
    console.log(event.target.value);
  });

  document.body.appendChild(textArea);
}
