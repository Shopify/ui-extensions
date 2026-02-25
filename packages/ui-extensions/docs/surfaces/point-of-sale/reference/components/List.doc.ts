import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'List',
  description:
    'The List component displays structured data in rows with rich content including labels, subtitles, badges, images, and interactive elements. Use it to present organized information with consistent formatting and user interaction capabilities.\n\nList items no longer have dividers as of POS version 10.0.0.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the List component.',
      type: 'ListProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'list-thumbnail.png',
  defaultExample: {
    image: 'list-default.png',
    codeblock: generateCodeBlock('Show a product list', 'list', 'products'),
    description:
      'Display structured data in organized rows with rich content. This example demonstrates a List component showing products with labels, subtitles, images, and interactive elements, providing consistent formatting for collections of items like products, customers, or menu options.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use images strategically with appropriate display strategies:** Choose the right image display strategy based on your content. Use \`'automatic'\` for mixed content, \`'always'\` when consistent image areas improve layout, and \`'never'\` for text-heavy lists where images would be distracting.\n- **Implement efficient pagination with onEndReached:** Use the \`onEndReached\` callback to implement smooth pagination that doesn't disrupt the user experience. Set \`isLoadingMore\` appropriately to provide visual feedback during data fetching operations.\n- **Apply semantic colors for subtitle information:** Use \`ColorType\` values in subtitles to convey meaning effectively. Apply \`TextSuccess\` for positive states, \`TextCritical\` for errors, and \`TextSubdued\` for less important information.\n- **Design meaningful row interactions:** Use \`onPress\` callbacks for navigation or detail views, and \`showChevron\` to indicate navigation actions. Reserve toggle switches for immediate state changes that don't require navigation.\n- **Optimize for touch interfaces:** Ensure adequate spacing and touch target sizes by leveraging the List component's built-in touch optimization.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- List row structure is predefined with specific left and right side layouts—custom row layouts beyond the provided structure aren't supported.\n- Image display is limited to the left side of rows with optional badge overlays—complex image layouts or multiple images for each row aren't available.\n- Toggle switches and interactive elements are limited to the predefined types—custom interactive components within rows require using \`onPress\` callbacks and external state management.\n`,
    },
  ],
};

export default data;
