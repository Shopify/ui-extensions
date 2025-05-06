export default function extension() {
  const box = document.createElement('s-box');
  box.background = 'subdued';
  box.borderRadius = 'base';
  box.borderWidth = 'base';
  box.padding = 'base';

  const paragraph1 = document.createElement('s-paragraph');
  paragraph1.textContent =
    'This is a basic Box component with some styling applied.';
  box.appendChild(paragraph1);

  const paragraph2 = document.createElement('s-paragraph');
  paragraph2.textContent = 'Box maintains the natural size of its contents.';
  box.appendChild(paragraph2);

  document.body.append(box);
}
