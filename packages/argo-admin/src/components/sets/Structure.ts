type Components = typeof import(/* webpackChunkName: 'argo-components' */ '..');

export type StructureComponents = Components['Card'] | Components['CardSection'];
