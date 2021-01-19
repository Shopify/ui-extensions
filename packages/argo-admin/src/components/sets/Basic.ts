type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type BasicComponents =
  | Components['Pressable']
  | Components['Text']
  | Components['Stack']
  | Components['StackItem'];
