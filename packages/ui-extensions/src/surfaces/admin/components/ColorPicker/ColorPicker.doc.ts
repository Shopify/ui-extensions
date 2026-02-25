import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ColorPicker',
  description:
    'The ColorPicker component provides a visual interface for merchants to select a color. It displays a color spectrum and outputs the selected color as a hex string. It optionally supports alpha (transparency) selection.\n\nTo let merchants type a hex value directly, add a [TextField](/docs/api/admin-extensions/{API_VERSION}/ui-components/forms/textfield) alongside the picker.',
  requires: '',
  thumbnail: 'colorpicker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the ColorPicker component.',
      type: 'ColorPickerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'colorpicker-default.png',
    description:
      'Pick a product accent color from a visual selector and save it. This example uses `ColorPicker` to capture the selected hex value, with a [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) that saves the color.',
    codeblock: {
      title: 'Select product accent color',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ColorPicker/examples/basic-colorpicker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-colorpicker.example.ts',
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
          'Enable the alpha (transparency) channel by setting `allowAlpha` to `true`. This example lets merchants pick an overlay color with adjustable opacity, returning a hex color string with alpha (for example, `#RRGGBBAA`) for use on product pages.',
        codeblock: {
          title: 'Enable alpha transparency selection',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ColorPicker/examples/colorpicker-alpha.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/colorpicker-alpha.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Present multiple color pickers for a complete brand color configuration. This example renders primary and secondary brand color pickers separated by a [Divider](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/divider), letting merchants define a full product page color scheme.',
        codeblock: {
          title: 'Configure brand color palette',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ColorPicker/examples/colorpicker-branding.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/colorpicker-branding.example.ts',
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
      sectionContent: `- **Show the current color:** Display the selected color value near the picker (using a colored [Badge](/docs/api/admin-extensions/{API_VERSION}/ui-components/feedback-and-status-indicators/badge), a swatch, or the hex string) so merchants can confirm their choice without relying solely on the picker's visual state.
- **Use within a labeled context:** ColorPicker doesn't have a built-in label. Pair it with a [Heading](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/heading) or [Text](/docs/api/admin-extensions/{API_VERSION}/ui-components/typography-and-content/text) component to describe what the color selection controls, such as "Background color" or "Accent color".`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- ColorPicker doesn't include a text input for manually entering hex values. Merchants can only select colors visually.
- The \`value\` prop accepts RGB, RGBA, and hex color strings (3, 4, 6, or 8-character hex). Named CSS colors (like "red" or "blue") aren't supported.
- The \`onChange\` callback returns a hex string (#RRGGBB or #RRGGBBAA when alpha is enabled). Other color formats like HSL or RGB tuples aren't returned.
- ColorPicker doesn't support preset color swatches or a palette of predefined colors. To offer common color options, build a custom palette using buttons alongside the picker.`,
    },
  ],
  related: [],
};

export default data;
