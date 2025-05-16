import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'ClipboardItem',
  description: `
  This component is used alongside a \`Button\` or \`Link\` component to facilitate writing to the user's clipboard.

  ClipboardItem's \`--auto\` command is \`--copy\`, which copies the content of the text prop to the clipboard.

  \`ClipboardItem\` is a non-rendering component.
`,
  category: 'Polaris web components',
  subCategory: 'utilities',
  related: [
    {
      name: 'Button',
      url: 'button',
      type: 'Component',
    },
    {
      name: 'Link',
      url: 'link',
      type: 'Component',
    },
  ],
};

export default data;
