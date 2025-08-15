import {
  BlockStack,
  Button,
  InlineStack,
  Link,
  Modal,
  TextField,
  Text,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-index.announcement.render',
  (root) => {
    const modalFragment = root.createFragment();
    modalFragment.appendChild(
      root.createComponent(
        Modal,
        {
          title:
            'Tell us about your shopping experience',
          padding: true,
        },
        [
          root.createComponent(
            BlockStack,
            undefined,
            [
              root.createComponent(
                Text,
                undefined,
                "We'd love to hear about your shopping experience",
              ),
              root.createComponent(TextField, {
                multiline: 4,
                label:
                  'How can we make your shopping experience better?',
              }),
              root.createComponent(
                Button,
                undefined,
                'Submit',
              ),
            ],
          ),
        ],
      ),
    );

    root.appendChild(
      root.createComponent(
        InlineStack,
        undefined,
        [
          root.createComponent(
            Text,
            undefined,
            'Check our latest offers',
          ),
          root.createComponent(
            Link,
            {
              overlay: modalFragment,
            },
            'Fill out the survey',
          ),
        ],
      ),
    );
  },
);
