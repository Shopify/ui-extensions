import {Button as BaseButton} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoButton = createRemoteVueComponent(BaseButton, {
  emits: {
    press: 'onPress',
  },
});
