type Components = typeof import(/* webpackChunkName: 'argo-components' */ '../components');

export type ActionComponents = Components['Button'] | Components['Link'];

export type BasicComponents =
  | Components['Clickable']
  | Components['Text']
  | Components['Stack']
  | Components['StackItem'];

export type FeedbackComponents = Components['Badge'] | Components['Banner'];

export type FormComponents =
  | Components['Checkbox']
  | Components['RadioButton']
  | Components['Select']
  | Components['TextField'];

export type ImageComponents = Components['Thumbnail'] | Components['Icon'];

export type ListComponents =
  | Components['ResourceList']
  | Components['ResourceItem']
  | Components['OptionList'];

export type LoadingComponents = Components['Spinner'];

export type OverlayComponents = Components['Modal'];

export type StructureComponents =
  | Components['Card']
  | Components['CardSection']
  | Components['Page'];
