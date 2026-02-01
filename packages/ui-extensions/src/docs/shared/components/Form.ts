import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Form',
  description:
    'The `Form` component wraps form controls and enables implicit submission, allowing users to submit from any input by pressing **Enter**. Use `Form` to group related input fields and handle form submission through JavaScript event handlers.' +
    "\n\nUnlike HTML forms, `Form` doesn't automatically submit data using HTTP—you must register a `submit` event to process form data programmatically. For Shopify Functions configuration forms, use [`FunctionSettings`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/functionsettings).",
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [],
};

export default data;
