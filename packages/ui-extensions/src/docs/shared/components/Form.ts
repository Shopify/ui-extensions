import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Form',
  description:
    'The form component wraps form controls and enables implicit submission, allowing users to submit from any input by pressing **Enter**. Use form to group related input fields and handle form submission through JavaScript event handlers.' +
    "\n\nUnlike HTML forms, form doesn't automatically submit data using HTTP—you must register a `submit` event to process form data programmatically. For Shopify Functions configuration forms, use [function settings](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/function-settings).",
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [],
};

export default data;
