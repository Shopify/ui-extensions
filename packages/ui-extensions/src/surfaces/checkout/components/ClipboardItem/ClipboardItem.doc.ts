import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ClipboardItem',
  description: `
  This component is used alongside a \`Button\` or \`Link\` component to facilitate writing to the user's clipboard.

  ClipboardItem's \`--auto\` command is \`--copy\`, which copies the content of the text prop to the clipboard. Surfaces may display some form of visual confirmation of this action.

  \`ClipboardItem\` is a non-rendering component.
`,
  requires: '',
  isVisualComponent: false,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ClipboardItemProps',
    },
  ],
  category: 'Components',
  subCategory: 'utilities',
  defaultExample: {
    image: 'clipboard-basic.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-clipboarditem.example.html',
          language: 'html',
        },
      ],
    },
  },
  related: [
    {
      name: 'Button',
      subtitle: 'Component',
      url: 'button',
      type: 'Component',
    },
    {
      name: 'Link',
      subtitle: 'Component',
      url: 'link',
      type: 'Component',
    },
  ],
};

export default data;
