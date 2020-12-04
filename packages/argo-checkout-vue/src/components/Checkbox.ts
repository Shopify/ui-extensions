import {Checkbox} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoCheckbox = createRemoteVueComponent(Checkbox, {
  emits: {
    change: 'onChange',
  },
});
