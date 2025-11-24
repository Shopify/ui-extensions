import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'List',
  description:
    'The `List` component displays structured data in rows with rich content including labels, subtitles, badges, images, and interactive elements. Use it to present organized information with consistent formatting and user interaction capabilities.\n\nList items no longer have dividers as of POS version 10.0.0.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `List` component.',
      type: 'ListProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'list-thumbnail.png',
  defaultExample: {
    image: 'list-default.png',
    codeblock: generateCodeBlock('Show a list of items', 'list', 'products'),
    description:
      'Present organized information with rich content in a consistent format. This example shows how to create a List with labels, subtitles, badges, images, and interactive elements, ideal for displaying products, orders, customers, or other structured data with tap interactions.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use images strategically with appropriate display strategies:** Choose the right image display strategy based on your content. Use \`'automatic'\` for mixed content, \`'always'\` when consistent image areas improve layout, and \`'never'\` for text-heavy lists where images would be distracting.
- **Implement efficient pagination with onEndReached:** Use the \`onEndReached\` callback to implement smooth pagination that doesn't disrupt the user experience. Set \`isLoadingMore\` appropriately to provide visual feedback during data fetching operations.
- **Apply semantic colors for subtitle information:** Use \`ColorType\` values in subtitles to convey meaning effectively. Apply \`TextSuccess\` for positive states, \`TextCritical\` for errors, and \`TextSubdued\` for less important information.
- **Design meaningful row interactions:** Use \`onPress\` callbacks for navigation or detail views, and \`showChevron\` to indicate navigation actions. Reserve toggle switches for immediate state changes that don't require navigation.
- **Optimize for touch interfaces:** Ensure adequate spacing and touch target sizes by leveraging the \`List\` component's built-in touch optimization.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- List row structure is predefined with specific left and right side layouts—custom row layouts beyond the provided structure aren't supported.
- Image display is limited to the left side of rows with optional badge overlays—complex image layouts or multiple images for each row aren't available.
- Toggle switches and interactive elements are limited to the predefined types—custom interactive components within rows require using \`onPress\` callbacks and external state management.
      `,
    },
  ],
};

export default data;
