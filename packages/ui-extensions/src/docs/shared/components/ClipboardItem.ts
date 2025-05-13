import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const sharedContent: SharedReferenceEntityTemplateSchema = {
  name: 'ClipboardItem',
  description: `
  This component is used alongside a \`Button\` or \`Link\` component to facilitate writing to the user's clipboard.

  ClipboardItem's \`--auto\` command is \`--copy\`, which copies the content of the text prop to the clipboard.

  \`ClipboardItem\` is a non-rendering component.
`,
  category: 'Polaris web components',
  subCategory: 'utilities',
};

export default sharedContent;
