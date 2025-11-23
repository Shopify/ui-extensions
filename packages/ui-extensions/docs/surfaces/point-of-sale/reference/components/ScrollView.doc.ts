import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'scroll-view', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollView',
  description:
    "The `ScrollView` component creates a scrollable container for content that exceeds the available display area. Use it to enable scrolling behavior for long content lists or detailed information that doesn't fit within screen constraints.\n\nThe component creates scrollable containers that automatically adjust to content size with optimized rendering for long lists and large content areas. It supports pull-to-refresh gestures, scroll position tracking, and lazy loading integration, providing smooth scrolling performance even with extensive content on resource-constrained POS hardware.\n\n`ScrollView` components provide scroll position tracking through callbacks, enabling features like back-to-top buttons, infinite scroll, and scroll-based animations that enhance the browsing experience.",
  isVisualComponent: true,
  type: 'component',
  definitions: [],
  category: 'Components',
  related: [],
  thumbnail: 'scroll-view-thumbnail.png',
  defaultExample: {
    image: 'scroll-view-default.png',
    codeblock: generateCodeBlockForComponent(
      'Scroll long content',
      'default.example',
    ),
    description:
      'Create a scrollable container for content that exceeds the display area. This example shows how to implement a ScrollView that enables smooth scrolling for long lists or detailed information, supporting pull-to-refresh and lazy loading for optimal performance.',
  },
};

export default data;
