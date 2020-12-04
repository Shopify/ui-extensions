import {Link} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoLink = createRemoteVueComponent(Link, {
  emits: {
    press: 'onPress',
  },
});
