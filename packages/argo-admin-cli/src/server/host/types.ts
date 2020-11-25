import {ArgoExtensionsProps} from '@shopify/argo-admin-host';

export type HostProps = Pick<ArgoExtensionsProps<any>, 'script' | 'components'>;
