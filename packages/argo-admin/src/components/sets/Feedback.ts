type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type FeedbackComponents = Components['Badge'] | Components['Banner'];
