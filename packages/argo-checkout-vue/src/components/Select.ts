import {Select} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoSelect = createRemoteVueComponent(Select, {
  emits: {
    change: 'onChange',
  },
});
