type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type FormComponents =
  | Components['Checkbox']
  | Components['Radio']
  | Components['Select']
  | Components['TextField'];
