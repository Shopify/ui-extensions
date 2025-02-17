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
      {
        title: 'TS',
        code: `../examples/stack/${fileName}.ts`,
        language: 'ts',
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
The following examples will demonstrate some, but not all of the abilities of the \`Stack\` component. For simplicity, these examples use the React version of the \`Stack\` component, but the same results will be achieved by using the same properties with the regular JS library.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'inline-default',
      title: 'Inline Stack with default values',
      sectionContent: `
In this example, we specify \`inline\` for the \`direction\`. As you can see, we have two small buttons occupying just the amount of space that they need, at the left side of the \`Stack\`. This is because \`justifyContent\` is set to \`start\` by default. We also include a \`gap\` of "200".
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
You can also center elements in your \`inline\` stack. For this, you can specify the \`justifyContent\` to be \`center\`. However, in this case you also want \`flexChildren\` to be \`false\` (which is the default), so that the children can take up the minimal amount of space that they need, and be centered.
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
      title: 'Inline Stack with vertical axis centering',
      sectionContent: `Here we have an \`inline\` stack with two children. The first is a block stack with two buttons, and the second is a single button. Since the first element has a greater intrinsic height, our main inline stack's intrinsic height is also increased. We can center both children component along the main axis (x-axis) by setting the \`alignItems\` property to \`center\`.`,
      codeblock: generateCodeBlockForStack(
        'Inline Stack with vertical axis centering',
        'inline-align-items-center',
      ),
      image: 'extension-stack-inline-align-items-center.png',
    },
    {
      type: 'Generic',
      anchorLink: 'block',
      title: 'Block Stack',
      sectionContent: `
You can specify your \`Stack\` to layout its children vertically by setting the \`direction\` property to \`block\`.
  `,
      codeblock: generateCodeBlockForStack('Block Stack', 'block'),
      image: 'extension-stack-block.png',
    },
    {
      type: 'Generic',
      anchorLink: 'extension-stack-block-space-between',
      title: 'Block Stack with space between children',
      sectionContent: `
 Here we are spacing out the children of our block stack by setting \`justifyContent\` to \`space-between\` in order to space the children out as much as possible along the vertical axis. Note that in this example, we removed the wrapping \`ScrollView\` in order to introduce a custom height by setting the \`blockSize\` to \`50%\`. We are also adding \`inlinePadding\` of \`450\` in order to mimic the padding applied to the UI Extension screen header.
`,
      codeblock: generateCodeBlockForStack(
        'Block Stack with space between children',
        'block-space-between',
      ),
      image: 'extension-stack-block-space-between.png',
    },
    {
      type: 'Generic',
      anchorLink: 'block-center-all',
      title: 'Block Stack centered on both axes',
      sectionContent: `
You can center your block stack on the vertical axis by setting \`justifyContent\` to \`center\`. Next, you can set a custom size on your block stack by setting the \`blockSize\` and \`inlineSize\`. In this example we set them to \`50%\` and \`100%\` respectively. We can then center our elements along both axis of the stack by setting justifyContent to \`center\` to center the children vertically, and setting both \`alignContent\` and \`alignItems\` to \`center\`.
`,
      codeblock: generateCodeBlockForStack(
        'Block Stack centered on both axes',
        'block-center-all',
      ),
      image: 'extension-stack-block-center-all.png',
    },
    {
      type: 'Generic',
      anchorLink: 'block-align-content-stretch',
      title: 'Block Stack with horizontal stretching',
      sectionContent: `
This example demonstrates a block stack with elements stretched to fill the width of the container. By setting \`alignContent\` to \`'stretch'\`, the children will expand to fill the available horizontal space. This is useful when you want all elements to have consistent width, regardless of their content.
`,
      codeblock: generateCodeBlockForStack(
        'Block Stack with horizontally stretched contents',
        'block-align-content-stretch',
      ),
      image: 'extension-stack-block-align-content-stretch.png',
    },
    {
      type: 'Generic',
      anchorLink: 'nested',
      title: 'Nested Stack',
      sectionContent: `
Now that we've run through a few examples of what a stack can do, let's move on to something more complex. You can nest multiple stacks of different configurations to achieve a more complex UI. In this example, we will create a row that displays several labels and an icon. This will mimic some of the basic rows that you can find across different POS screens.

Let's put the \`Selectable\` aside for now; we'll get to that later. The first stack is which we can refer to as the parent stack, is set to inline. It has two main children, a block stack on the left, and an inline stack on the right. To space them out completely along the horizontal axis, we set our parent inline stack's \`justifyContent\` to \`space-between\`. We also specify the \`inlineSize\` to be \`100%\` to take up the full width of the screen.

The first child stack (the block stack) simply has a gap of 100 to space out the two \`Text\` components.

The second child stack (the inline stack) has a gap of 600 to space out the \`Text\` and the \`Icon\`. We also set the \`alignItems\` and \`alignContent\` properties to \`center\` to center the \`Text\` and \`Icon\` within their stack.

However, we also need to the \`alignItems\` and \`alignContent\` properties to \`center\` on the parent inline stack to center the two children stacks along the vertical axis.

Finally, we can return to the \`Selectable\`. You'll notice that we've wrapped the entire stack in a \`Selectable\`. This makes the entire stack within the \`Selectable\` become a tappable surface, with an \`onPress\` handler, which is part of the \`Selectable\` component. It also gives a nice highlight effect when you tap, as you can see in the screenshot.
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
