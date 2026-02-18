import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The DatePicker component renders a visual calendar that lets merchants select a single date, multiple dates, or a date range. It supports disabling specific dates, days of the week, or date ranges.\n\nFor a compact form field with a calendar dropdown, use [DateField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/datefield).',
  requires: '',
  thumbnail: 'datepicker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the DatePicker component.',
      type: 'DatePickerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'datepicker-default.png',
    codeblock: {
      title: 'Add a single-date DatePicker',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/basic-datepicker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-datepicker.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: 'Use this when merchants need to select multiple dates.',
        codeblock: {
          title: 'Add a multi-date DatePicker',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/multiple-datepicker.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/multiple-datepicker.example.ts',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Use this when merchants need to select a range of dates.',
        codeblock: {
          title: 'Add a range DatePicker',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/range-datepicker.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/range-datepicker.example.ts',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use DateField in forms:** When the date picker is part of a form, use [DateField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/datefield) instead of a standalone DatePicker. DateField combines the calendar with a labeled text input.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- DatePicker doesn't support time selection. Dates are returned as strings in YYYY-MM-DD format without time information.
- The calendar displays one month at a time. There's no built-in way to show two months side-by-side for range selection.
- DatePicker doesn't include a built-in label or form field wrapper. When using it standalone, pair it with a [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) or [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) component to provide context.`,
    },
  ],
  related: [],
};

export default data;
