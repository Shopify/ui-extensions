export default function extension() {
  const paragraph = document.createElement('s-paragraph');
  paragraph.textContent = 'This is a paragraph';
  document.body.append(paragraph);

  const paragraph2 = document.createElement('s-paragraph');
  paragraph2.textContent = 'This is a second paragraph';
  document.body.append(paragraph2);
}
