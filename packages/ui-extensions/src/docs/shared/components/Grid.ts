import {
  type SharedReferenceEntityTemplateSchema,
  globalShared,
} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  ...globalShared,
  name: 'Grid',
  description:
    'Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).',
  category: 'Polaris web components',
  subCategory: 'Structure',
};

export default data;
