import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'DropZone',
  description: `
    \`s-drop-zone\` allows file uploads through drag-and-drop functionality into a designated area on a page, or by activating a button. At present, \`s-drop-zone\` does not offer image upload preview capabilities. The use of object URLs directly in an image component is not possible due to the extension and host operating on separate domains.

    Any element focused within the \`s-drop-zone\` component, including child elements such as the 'Add file' button, will initiate the file selector when the Enter or Spacebar key is pressed.
    `,
  category: 'Polaris web components',
  subCategory: 'Forms',
  related: [],
};

export default data;
