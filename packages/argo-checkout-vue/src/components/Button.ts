import {Button} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoButton = createRemoteVueComponent(Button, {
  emits: {
    press: 'onPress',
  },
});
