import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const generateTileExample = (options: {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  destructive?: boolean;
  badgeValue?: number;
  onPress?: boolean;
}) => {
  const attributes = [`title="${options.title}"`];

  if (options.subtitle) {
    attributes.push(`subtitle="${options.subtitle}"`);
  }
  if (options.enabled !== undefined) {
    attributes.push(`enabled="${options.enabled}"`);
  }
  if (options.destructive !== undefined) {
    attributes.push(`destructive="${options.destructive}"`);
  }
  if (options.badgeValue !== undefined) {
    attributes.push(`badgeValue="${options.badgeValue}"`);
  }
  if (options.onPress) {
    attributes.push(`onPress="handlePress"`);
  }

  return `<pos-tile ${attributes.join(' ')} />`;
};

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'A pressable tile component that displays information with an optional badge.',
  requires: '',
  thumbnail: 'tile-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TileProps',
      description: '',
      type: 'TileProps',
    },
  ],
  category: 'Components',
  defaultExample: {
    image: 'tile-default.png',
    codeblock: {
      title: 'Basic Tile',
      tabs: [
        {
          title: 'React',
          code: `
import {Tile} from '@shopify/ui-extensions-react/point-of-sale';

export function App() {
  return (
    <Tile 
      title="Product Name"
      subtitle="$19.99"
      onPress={() => console.log('Tile pressed')}
    />
  );
}
`,
          language: 'jsx',
        },
        {
          title: 'JS',
          code: `
import {Tile} from '@shopify/ui-extensions/point-of-sale';

const tile = root.createComponent(Tile, {
  title: 'Product Name',
  subtitle: '$19.99',
  onPress: () => console.log('Tile pressed'),
});

root.appendChild(tile);
`,
          language: 'js',
        },
      ],
    },
  },
  examples: [
    {
      description: 'Use a tile with a badge value to show quantity or count.',
      codeblock: {
        title: 'Tile with badge',
        tabs: [
          {
            title: 'React',
            code: `
import {Tile} from '@shopify/ui-extensions-react/point-of-sale';

export function App() {
  return (
    <Tile 
      title="Coffee"
      subtitle="$4.50"
      badgeValue={3}
      onPress={() => console.log('Coffee tile pressed')}
    />
  );
}
`,
            language: 'jsx',
          },
        ],
      },
    },
    {
      description:
        'Use the destructive prop for actions that remove or delete items.',
      codeblock: {
        title: 'Destructive tile',
        tabs: [
          {
            title: 'React',
            code: `
import {Tile} from '@shopify/ui-extensions-react/point-of-sale';

export function App() {
  return (
    <Tile 
      title="Remove Item"
      destructive
      onPress={() => console.log('Remove item')}
    />
  );
}
`,
            language: 'jsx',
          },
        ],
      },
    },
    {
      description: 'Disable a tile to prevent interaction.',
      codeblock: {
        title: 'Disabled tile',
        tabs: [
          {
            title: 'React',
            code: `
import {Tile} from '@shopify/ui-extensions-react/point-of-sale';

export function App() {
  return (
    <Tile 
      title="Unavailable"
      subtitle="Out of stock"
      enabled={false}
    />
  );
}
`,
            language: 'jsx',
          },
        ],
      },
    },
  ],
  related: [],
};

export default data;
