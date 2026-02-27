import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ColorPicker';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/color-picker.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Initialize with current values:** When editing existing colors, always set the picker's initial value to the current color. This shows merchants what they're changing from and maintains context.
- **Show preview of final result:** If possible, show how the selected color will look in its actual context (like previewing a button color on a button) alongside the picker.
- **Pair with color field for precision:** Use the component for visual selection combined with a [color field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/color-field) for precise hex input. This gives merchants both visual intuition and exact control.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The 2D color gradient area requires mouse/touch interaction. Keyboard users can only navigate between major UI elements (hue slider, alpha slider) but can't make fine-grained color adjustments in the gradient itself.
- The picker operates in the HSL color space and outputs values in hex format. Colors from other color spaces (like CMYK or LAB) might not be precisely represented, and might shift during conversion.
- On touch devices, selecting precise colors in the gradient can be difficult due to finger size obscuring the selection point. The picker works best with mouse or stylus input for fine color selection.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the color picker component.',
      type: 'ColorPicker',
    },
    {
      title: 'Events',
      description:
        'The color picker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ColorPickerEvents',
    },
  ],
  defaultExample: {
    image: 'color-picker-default.png',
    description:
      'Display the default color picker with hue and saturation controls.',
    codeblock: {
      title: 'Pick a color',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Allow users to select semi-transparent colors. This example displays a color picker with an alpha slider for adjusting opacity levels.',
            codeblock: {
              title: 'Enable alpha transparency',
              tabs: [
                {
                  code: './examples/with-alpha-transparency.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
