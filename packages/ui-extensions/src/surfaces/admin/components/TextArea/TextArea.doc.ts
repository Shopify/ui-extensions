import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'The TextArea component provides a multi-line text input for collecting longer-form content from merchants, such as descriptions, notes, or feedback. It supports configurable visible rows, length constraints, and autocomplete hints.\n\nFor single-line input, use [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield).',
  requires: '',
  thumbnail: 'textarea-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the TextArea component.',
      type: 'TextAreaProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'textarea-default.png',
    codeblock: {
      title: 'Simple TextArea example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/TextArea/examples/basic-textarea.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-textarea.example.ts',
          language: 'js',
        },
      ],
    },
  },

  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Write a clear label:** The required \`label\` prop tells merchants what content to enter. Use specific, descriptive labels like "Description" or "Return instructions".
- **Use for multi-line content only:** If the expected input is a single line (like a name or title), use [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield) instead. TextArea should be reserved for content that benefits from multiple lines.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The \`rows\` prop sets the initial visible height but doesn't prevent the textarea from growing. Content that exceeds the visible rows will scroll.
- TextArea doesn't support rich text formatting. All input is treated as plain text. For rich text editing, a custom solution is needed.
- The \`minLength\` and \`maxLength\` props validate length but don't display a character counter. Implement a counter separately if merchants need to see remaining characters.
- TextArea doesn't support the \`suffix\` prop that [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield) offers. There is no built-in way to add a decoration or unit indicator.`,
    },
  ],
  related: [],
};

export default data;
