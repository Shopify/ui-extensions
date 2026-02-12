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
    'The Stack component organizes elements horizontally or vertically along the block or inline axis. Use it to structure layouts, group related components, or control spacing between elements with flexible alignment options.\n\nThe component simplifies layout creation by automatically managing spacing between child elements through gap properties, eliminating the need for manual margin management. It supports both horizontal and vertical arrangements, flexible alignment options, and wrapping behavior, making it the foundation for building consistent, responsive layouts throughout POS extensions.\n\nStack components support responsive gap values that automatically adjust spacing based on screen size, ensuring layouts remain visually balanced and maintain proper element separation across different devices.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Stack component.',
      type: 'StackProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'stack-thumbnail.png',
  defaultExample: {
    image: 'stack-default.png',
    codeblock: generateCodeBlockForStack(
      'Layout elements horizontally or vertically',
      'horizontal-default',
    ),
    description:
      'Organize UI elements horizontally or vertically with automatic spacing management. This example shows a Stack with default values, demonstrating how to structure layouts and control element spacing through gap properties without manual margin management.',
  },
  examples: {
    description:
      'Learn how to create flexible layouts with inline and block stacks, control alignment, and nest stacks for complex UIs.',
    examples: [
      {
        codeblock: generateCodeBlockForStack(
          'Arrange elements vertically',
          'vertical',
        ),
        description:
          'Stack elements vertically by setting `direction="block"`. This creates a vertical layout with automatic gap spacing between elements, ideal for forms, lists, or any vertically-stacked content.',
        image: 'extension-stack-vertical.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Center content on both axes',
          'vertical-center-children',
        ),
        description:
          'Center elements both horizontally and vertically using `justifyContent="center"`, `alignContent="center"`, and `alignItems="center"` with custom `blockSize="50%"` and `inlineSize="100%"`. All three alignment properties work together to create perfectly centered content on both axes.',
        image: 'extension-stack-vertical-center.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Center elements horizontally',
          'horizontal-center-children',
        ),
        description:
          'Center elements horizontally using `justifyContent="center"` with `flexChildren={false}` (default). This positions children in the center while keeping them at their minimum required size, ideal for centered button groups without stretching.',
        image: 'extension-stack-horizontal-centered.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Expand children to fill available space',
          'horizontal-flex-children',
        ),
        description:
          'Make child components expand to fill available space in an inline stack using `flexChildren={true}`. This stretches the two buttons to occupy maximum space within the inline container, distributing space evenly across children for full-width layouts.',
        image: 'extension-stack-horizontal-flexChildren.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Create complex layouts with nested stacks',
          'nested',
        ),
        description:
          'Nest multiple stacks to build sophisticated layouts. This example creates a tappable row using an inline parent stack with `justifyContent="space-between"` and `inlineSize="100%"` containing two child stacks: a block stack (left) with gap 100 for labels, and an inline stack (right) with gap 600 for text and icon. The entire structure is wrapped in a Selectable component for tap interaction with visual highlight.',
        image: 'extension-stack-nested.png',
      },
      {
        codeblock: generateCodeBlockForStack(
          'Space elements apart vertically',
          'vertical-bottom-children',
        ),
        description:
          'Distribute children vertically using `justifyContent="space-between"` with `blockSize="50%"` for custom height. This example removes the ScrollView wrapper and adds `inlinePadding="450"` to mimic screen header padding, spreading children across the available height with maximum spacing.',
        image: 'extension-stack-vertical-flex-end.png',
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Apply consistent spacing using numeric values:** Use the predefined numeric spacing values (0.5 through 16) to maintain consistency across your interface. Start with 3 or 4 for standard spacing and adjust up or down based on your content hierarchy needs.
- **Use semantic padding for consistent layouts:** Apply \`paddingVertical\` and \`paddingHorizontal\` using the semantic spacing values (\`HalfPoint\` through \`ExtraLarge\`) to create consistent padding patterns that align with the POS design system.
- **Use alignment properties for professional layouts:** Use the \`alignment\` property to control cross-axis positioning. Choose \`'flex-start'\` for natural alignment, \`'center'\` for centered layouts, or distribution values like \`'space-between'\` for evenly distributed content.
- **Control flex behavior strategically:** Use the \`flex\` property to make Stack components grow or shrink within their containers, and \`flexChildren\` to stretch child elements to fill available cross-axis space when needed.
- **Manage wrapping behavior appropriately:** Use \`flexWrap\` to control how children behave when they exceed container space. Choose \`'wrap'\` for responsive layouts, \`'nowrap'\` for fixed layouts, or \`'wrap-reverse'\` for specialized arrangements.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Direction is limited to vertical and horizontal orientations—diagonal or complex arrangements require multiple nested Stack components or alternative layout approaches.
- Spacing values are predefined numeric constants—custom spacing values outside the provided scale aren't supported to maintain design consistency.
- Flex behavior follows standard CSS flexbox rules—complex layout requirements may need multiple Stack components with different configurations for optimal results.
      `,
    },
  ],
};

export default data;
