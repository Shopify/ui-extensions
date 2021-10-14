import {extend, Text} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const formattedText = root.createComponent(Text, {
    appearance: 'success',
    emphasized: true,
    id: 'some_id',
    size: 'small',
    strong: true,
  });
  
  formattedText.appendChild('Formatted text is awesome!');

  const simpleText = root.createText('This simple text is a bit less awesome');

  root.appendChild(formattedText);
  root.appendChild(simpleText);

  root.mount();
});
