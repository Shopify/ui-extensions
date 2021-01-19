type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type ListComponents =
  | Components['ResourceList']
  | Components['ResourceItem']
  | Components['OptionList'];
