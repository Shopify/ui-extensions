type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type ImageComponents = Components['Thumbnail'] | Components['Icon'];
