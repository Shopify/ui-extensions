import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The Image component displays an image from a URL. It supports accessibility labels (or alt text), lazy loading, load and error callbacks, and a decorative mode for images that should be ignored by screen readers.\n\nFor rendering Polaris icons, use [Icon](/docs/api/admin-extensions/{API_VERSION}/ui-components/media-and-visuals/icon).',
  requires: '',
  thumbnail: 'image-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Image component.',
      type: 'ImageProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Simple Image example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Image/examples/basic-Image.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Image.example.ts',
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
      sectionContent: `- **Write meaningful alt text:** The required \`accessibilityLabel\` (or \`alt\`) prop is announced by screen readers and displayed when the image fails to load. Describe what the image shows, not how it looks — for example, "Product photo of a red wool scarf" rather than "image123.jpg". Learn more about [writing effective alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204).
- **Use \`decorative\` only for non-informational images:** Set \`accessibilityRole="decorative"\` for background patterns, dividers, or visual flourishes that don't add meaning. If the image helps the merchant understand content or make a decision (like a product photo or a status illustration), then it needs alt text — don't mark it as decorative.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Image doesn't support responsive image techniques like srcset or the picture element. A single image URL is used at all resolutions.
- Image doesn't support built-in cropping, aspect ratio control, or object-fit behavior. The image renders at its natural size unless constrained by a parent container.`,
    },
  ],
  related: [],
};

export default data;
