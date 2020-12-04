import {Radio} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoRadio = createRemoteVueComponent(Radio, {
  emits: {
    change: 'onChange',
  },
});
