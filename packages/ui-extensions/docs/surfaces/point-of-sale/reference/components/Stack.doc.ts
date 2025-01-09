import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const generateCodeBlockForStack = (title: string, fileName: string) => {
  return {
    title,
    tabs: [
      {
        title: 'React',
        code: `../examples/stack/${fileName}.tsx`,
        language: 'tsx',
      },
    ],
  };
};

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    'A container for other components that allows them to be stacked horizontally or vertically. When building complex UIs, this will be your primary building block. Stacks always wrap the content to the next column or row.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Stack',
      description: '',
      type: 'StackProps',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'examples',
      title: 'Examples',
      sectionContent: `
The following examples will demonstrate some, but not all of the abilities of the \`Stack\` component. In all the following examples we will be applying \`horizontalPadding\` of \`ExtraExtraLarge\`, since this is the default that we use on POS when we wrap our screens. For simplicity, these examples use the React version of the \`Stack\` component, but the same results will be achieved by using the same props with the regular JS library.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'inline-default',
      title: 'Inline Stack with default values',
      sectionContent: `
In this example, we specify \`inline\` for the \`direction\`. We don't specify the \`flex\`, which means it's 0 by default. However, \`horizontal\` stacks will always stretch to fill from the left to the right of the screen. As you can see, we have two small buttons occupying just the amount of space that they need, at the left side of the \`Stack\`. This is because \`alignment\` is set to \`flex-end\` by default.
`,
      codeblock: generateCodeBlockForStack(
        'Inline Stack with default values',
        'inline-default',
      ),
      image: 'extension-stack-inline.png',
    },
    {
      type: 'Generic',
      anchorLink: 'inline-flex-children',
      title: 'Inline Stack with flexChildren',
      sectionContent: `
Similar to the example above, but this time we are specifying \`flexChildren\` to be \`true\`. This means that the two buttons will take up the max amount of space that they can within the \`inline\` stack.
      `,
      codeblock: generateCodeBlockForStack(
        'Inline Stack with flexChildren',
        'inline-flex-children',
      ),
      image: 'extension-stack-inline-flexChildren.png',
    },
    {
      type: 'Generic',
      anchorLink: 'inline-center-children',
      title: 'Inline Stack with centered children',
      sectionContent: `
You can also center elements in your \`inline\` stack. For this, you can specify the \`alignment\` to be \`center\`. However, in this case you also want \`flexChildren\` to be \`false\` (which is the default), so that the children can take up the minimal amount of space that they need, and be centered.
`,
      codeblock: generateCodeBlockForStack(
        'Inline Stack with centered children',
        'inline-center-children',
      ),
      image: 'extension-stack-inline-centered.png',
    },
    {
      type: 'Generic',
      anchorLink: 'inline-align-items-center',
      title:
        'Inline Stack with nested block stack and single child that are center aligned on the main axis',
      sectionContent: `
To make the children be aligned to the end of your \`inline\` container, you just need to specify \`alignment\` to be \`flex-end\`. Note that in the first example, the children were at the start of the container. This is because the default value is \`flex-start\`.
`,
      codeblock: generateCodeBlockForStack(
        'Inline Stack with children at the end',
        'inline-align-items-center',
      ),
      image: 'inline-align-items-center.png',
    },
    {
      type: 'Generic',
      anchorLink: 'block',
      title: 'Block Stack',
      sectionContent: `
You can specify your \`Stack\` to layout its children vertically by setting the \`direction\` prop to \`block\`.
  `,
      codeblock: generateCodeBlockForStack('Block Stack', 'block'),
      image: 'extension-stack-vertical.png',
    },
    {
      type: 'Generic',
      anchorLink: 'block-space-between',
      title: 'Block Stack with space between children',
      sectionContent: `
You can center your stack's children along the \`vertical\` axis by setting the \`alignment\` to \`center\`. However, because \`vertical\` stacks only take up the minimal amount of \`vertical\` space required when \`flex\` is set to \`0\` (which is by default), you will need to set \`flex\` to \`1\`
`,
      codeblock: generateCodeBlockForStack(
        'Block Stack with space between children',
        'block-space-between',
      ),
      image: 'block-space-between.png',
    },
    {
      type: 'Generic',
      anchorLink: 'block-center-all',
      title: 'Block Stack centered on both axes',
      sectionContent: `
You can set your children to the bottom of your \`block\` stack by setting \`alignment\` to \`flex-end\`. As explained in the previous example, you also need to set \`flex\` to \`1\`, since the default is \`0\`, which will make your container only take up the minimum amount of space it needs.
`,
      codeblock: generateCodeBlockForStack(
        'Block Stack centered on both axes',
        'block-center-all',
      ),
      image: 'block-center-all.png',
    },
    {
      type: 'Generic',
      anchorLink: 'nested',
      title: 'Nested Stack',
      sectionContent: `
Now that we've run through a few examples of what a \`Stack\` can do, let's move on to something more complex. You can nest multiple Stacks of different configurations to achieve a more complex UI. In this example, we will create a row that displays several labels and an icon. This will mimic some of the basic rows that you can find across different POS screens.

Let's put the \`Selectable\` aside for now; we'll get to that later. If you look at the first \`Stack\`, this is our parent \`Stack\`. We've set its \`direction\` to \`horizontal\` and its \`alignment\` to \`space-between\`. Then, we've added some vertical and horizontal padding (as highlighted in the screenshot).

As you can see, there are two child Stacks. Because the parent \`Stack\` is set to \`space-between\`, these two child Stacks are spread to each end of the parent horizontal \`Stack\`. Both of these child Stacks occupy the amount of space they need, but not more.

The first child \`Stack\` is a simple vertical \`Stack\` that stacks the two left labels. It specifies the \`spacing\` to be \`0.5\` (the default is \`1\`, and this was a bit too much).

The second child \`Stack\` has another nested \`Stack\`. Let's discuss the nested \`Stack\` first. This is a horizontal \`Stack\` that lays out a text label and an icon horizontally. We then apply a bit of padding. That horizontal \`Stack\` is wrapped in a vertical \`Stack\`. The reason for this is to align the horizontal \`Stack\` on the center of the vertical axis, giving it a nicer appearance. Without it, the horizontal \`Stack\` would be located at the same height as the "Hello world!" \`Text\` on the left side of our row. But by specifying a \`flex\` of \`1\`, we are telling the vertical \`Stack\` to take as much vertical space as it can within its parent container. And then we specify an alignment of center, which lays out its child horizontal \`Stack\` on the center of its vertical axis.

Finally, we can return to the \`Selectable\`. You'll notice that we've wrapped the entire \`Stack\` in a \`Selectable\`. This makes the entire \`Stack\` within the \`Selectable\` become a tappable surface, with an \`onPress\` handler, which is part of the \`Selectable\` component. It also gives a nice highlight effect when you tap, as you can see in the screenshot.
`,
      codeblock: generateCodeBlockForStack('Nested Stack', 'nested'),
      image: 'extension-stack-nested.png',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'stack-thumbnail.png',
  defaultExample: {
    image: 'stack-default.png',
    codeblock: generateCodeBlockForStack('Stack', 'inline-default'),
  },
};

export default data;
