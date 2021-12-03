"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const textfield = root.createComponent(_adminUiExtensions.TextField, {
    label: 'Super text field',
    type: 'text',
    value: 'I can fly!',
    placeholder: 'Type a thing',
    multiline: 3,
    prefix: 'I typed:',
    suffix: 'into this text field',
    error: 'I hate to break this to you, but you cannot fly',
    onChange: value => console.log(value, ' was typed'),
    onInput: value => console.log(value, ' was typed'),
    onFocus: () => console.log('Welcome to the super field!'),
    onBlur: () => console.log('Left to do something else'),
    clearButton: true,
    onClearButtonPress: () => console.log('Clear that silly statement')
  });
  root.appendChild(textfield);
  root.mount();
});