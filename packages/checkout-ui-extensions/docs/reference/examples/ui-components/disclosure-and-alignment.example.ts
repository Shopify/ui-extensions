import {
  extend,
  BlockStack,
  View,
  InlineLayout,
  InlineStack,
  Image,
  Pressable,
  Icon,
  Text,
  TextField,
  Form,
  Button,
  Disclosure,
  Divider,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
  const openIds = ['one'];

  const pressable = root.createComponent(
    Pressable,
    {
      toggles: 'one',
      padding: 'base',
    },
    [
      root.createComponent(
        InlineLayout,
        {
          blockAlignment: 'center',
          spacing: 'base',
          columns: ['auto', 'fill', 'auto'],
        },
        [
          root.createComponent(Icon, {
            source: 'gift',
            appearance: 'subdued',
          }),
          'Gift message',
          root.createComponent(Icon, {
            source: openIds.includes('one')
              ? 'chevronUp'
              : 'chevronDown',
            size: 'small',
          }),
        ],
      ),
    ],
  );

  const disclosureView = root.createComponent(
    View,
    {
      id: 'one',
      padding: ['none', 'base', 'base', 'base'],
    },
    [
      root.createComponent(
        Form,
        {
          onSubmit: () =>
            console.log('onSubmit event'),
        },
        [
          root.createComponent(BlockStack, {}, [
            root.createComponent(
              InlineLayout,
              {
                columns: ['fill', 'fill'],
                spacing: 'base',
              },
              [
                root.createComponent(TextField, {
                  label: 'From',
                  name: 'from0',
                  id: 'from0',
                }),
                root.createComponent(TextField, {
                  label: 'To',
                  name: 'to0',
                  id: 'to0',
                }),
              ],
            ),
            root.createComponent(TextField, {
              label: 'Message',
              name: 'message0',
              id: 'message0',
            }),
            root.createComponent(View, {}, [
              root.createComponent(
                Button,
                {
                  accessibilityRole: 'submit',
                  kind: 'secondary',
                },
                'Save',
              ),
            ]),
          ]),
        ],
      ),
    ],
  );

  const disclosure = root.createComponent(
    Disclosure,
    {
      defaultOpen: 'one',
      onToggle: (open) =>
        console.log('onToggle event', open),
    },
    [pressable, disclosureView],
  );

  const inlineLayout = root.createComponent(
    InlineLayout,
    {
      blockAlignment: 'baseline',
      spacing: 'base',
      columns: ['auto', 'fill', 'auto'],
      padding: 'base',
    },
    [
      root.createComponent(Icon, {
        source: 'profile',
        appearance: 'subdued',
      }),
      root.createComponent(
        BlockStack,
        {
          spacing: 'none',
        },
        [
          root.createComponent(
            InlineStack,
            {
              blockAlignment: 'center',
            },
            [
              root.createComponent(
                Text,
                {},
                'Verify with',
              ),
              root.createComponent(Image, {
                source:
                  'https://via.placeholder.com/50x15',
              }),
            ],
          ),
          root.createComponent(
            Text,
            {
              appearance: 'subdued',
              size: 'small',
            },
            '15% savings for students and military',
          ),
        ],
      ),
      root.createComponent(
        Pressable,
        {
          to: 'https://www.shopify.com',
        },
        [
          root.createComponent(Icon, {
            source: 'external',
            appearance: 'subdued',
          }),
        ],
      ),
    ],
  );
  const view = root.createComponent(
    View,
    {
      maxInlineSize: 400,
      cornerRadius: 'large',
      border: 'base',
    },
    [
      root.createComponent(
        BlockStack,
        {
          spacing: 'none',
        },
        [
          disclosure,
          root.createComponent(Divider),
          inlineLayout,
        ],
      ),
    ],
  );

  root.appendChild(view);
});
