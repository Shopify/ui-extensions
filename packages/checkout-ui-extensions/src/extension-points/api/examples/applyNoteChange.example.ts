import {extend} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root, {applyNoteChange}) => {
  applyNoteChange({type: 'updateNote', note: 'some note'});
});
