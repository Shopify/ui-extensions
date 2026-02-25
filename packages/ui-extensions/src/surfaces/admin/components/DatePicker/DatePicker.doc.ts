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
    description:
      'Schedule a promotion start date using an inline calendar. This example renders a `DatePicker` that captures the selected date, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that schedules the promotion.',
    codeblock: {
      title: 'Schedule promotion start date',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/basic-datepicker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-datepicker.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Enable multi-date selection by passing an array to `selected` to let merchants pick multiple individual dates. This example collects shipping blackout dates (specific days when a product can't be shipped) and saves them as an array to your fulfillment backend.",
        codeblock: {
          title: 'Select multiple blackout dates',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/multiple-datepicker.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/multiple-datepicker.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Select a date range by passing an object with `start` and `end` properties to `selected`. This example lets merchants define a sale period by picking start and end dates on the calendar, then saves the range to configure time-limited pricing.',
        codeblock: {
          title: 'Define a sale date range',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/range-datepicker.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/range-datepicker.example.ts',
              language: 'ts',
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
