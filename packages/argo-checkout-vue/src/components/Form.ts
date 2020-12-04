import {Form} from '@shopify/argo-checkout';
import {createRemoteVueComponent} from '@remote-ui/vue';

export const ArgoForm = createRemoteVueComponent(Form, {
  emits: {
    submit: 'onSubmit',
  },
});
