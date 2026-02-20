import {extension, Form, TextField, EmailField, Section, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;

    const form = root.createComponent(Form, {
      onSubmit: async () => {
        await fetch('/api/fulfillment/setup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      },
      onReset: () => {
        close();
      },
    });

    const stack = root.createComponent(BlockStack, {gap: true});

    const providerSection = root.createComponent(Section, {heading: 'Provider details'});
    const nameField = root.createComponent(TextField, {label: 'Provider name', name: 'providerName', required: true});
    const endpointField = root.createComponent(TextField, {label: 'API endpoint', name: 'endpoint'});
    providerSection.appendChild(nameField);
    providerSection.appendChild(endpointField);

    const contactSection = root.createComponent(Section, {heading: 'Contact information'});
    const contactName = root.createComponent(TextField, {label: 'Contact name', name: 'contactName'});
    const contactEmail = root.createComponent(EmailField, {label: 'Contact email', name: 'contactEmail'});
    contactSection.appendChild(contactName);
    contactSection.appendChild(contactEmail);

    const submitButton = root.createComponent(Button, {variant: 'primary'}, 'Set up provider');

    stack.appendChild(providerSection);
    stack.appendChild(contactSection);
    stack.appendChild(submitButton);
    form.appendChild(stack);
    root.appendChild(form);
  },
);
