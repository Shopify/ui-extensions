import {TextField} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoTextField = createRemoteVueComponent(TextField, {
  emits: {
    focus: 'onFocus',
    blur: 'onBlur',
    change: 'onChange',
    input: 'onInput',
  },
});
