type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type ActionComponents = Components['Button'] | Components['Link'];
