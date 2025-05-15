import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Stack',
  description: `
    \`s-stack\` structures layout elements along the [block or inline axes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) of the page. It is useful for organizing buttons, creating layouts that adjust to screen size, and controlling spacing between elements.
    It’s important to note that Stack does not include any padding by default. If you need padding around your stacked elements, use \`base\` to apply the default padding.
    When using \`s-stack\`, use smaller gaps between small elements and larger gaps between big ones. Maintain a consistent spacing in stacks across all pages of your app.
  `,
  category: 'Polaris web components',
  subCategory: 'Structure',
  related: [],
};

export default data;
