import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'box', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The `Box` component is a generic container that provides flexible layout with consistent spacing and styling. Use it to apply padding, to nest and group other components, or as the foundation for building structured layouts.\n\nThe component provides granular control over spacing through padding properties and sizing through width/height properties, serving as a building block for precise layouts. It simplifies the creation of containers with consistent spacing by using design system tokens, ensuring visual consistency and reducing the need for custom CSS in most layout scenarios.\n\n`Box` components provide shorthand properties for common padding patterns like equal padding on all sides or symmetric horizontal/vertical padding, reducing verbose property specifications for simpler layouts.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the `Box` component.',
      type: 'BoxProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'box-thumbnail.png',
  defaultExample: {
    image: 'box-default.png',
    codeblock: generateCodeBlockForBanner('Box', 'default.example'),
  },
};

export default data;
