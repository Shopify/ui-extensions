import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The DateField component combines a text input with a [DatePicker](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/datepicker) dropdown, giving merchants a compact way to select a single date. It supports common form field props (label, error, and change handlers) along with calendar navigation controls.\n\nFor multi-date or range selection, use [DatePicker](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/datepicker) directly.',
  requires: '',
  thumbnail: 'datefield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the DateField component.',
      type: 'DateFieldProps',
    },
  ],
  related: [],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'datefield-default.png',
    codeblock: {
      title: 'Add a single-date DateField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DateField/examples/basic-datefield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-datefield.example.ts',
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
      sectionContent: `- **Use DateField for single-date selection in forms:** DateField combines the familiar text input pattern with a calendar dropdown, making it ideal for form layouts where space is limited.
- **Provide a clear label:** Write labels that describe what the date represents, such as "Start date", "Ship by date", or "Event date".`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The text input portion of DateField expects dates in YYYY-MM-DD format. Other date formats entered manually may not be parsed correctly.
- DateField doesn't support time selection. If you need date and time, you must combine DateField with a separate time input.`,
    },
  ],
};

export default data;
