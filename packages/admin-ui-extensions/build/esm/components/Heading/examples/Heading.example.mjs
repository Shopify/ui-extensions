import { extend, Heading } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var heading = root.createComponent(Heading, {
    id: 'profile_heading',
    level: 3
  });
  var headingText = root.createText('This is a Title');
  heading.appendChild(headingText);
  root.appendChild(heading);
  root.mount();
});