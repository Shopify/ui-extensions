import {useState} from 'react';
import {
  reactExtension,
  Button,
  ClipboardItem,
  Icon,
  InlineStack,
  Text,
} from '@shopify/ui-extensions-react/checkout';

import type {IconProps} from '@shopify/ui-extensions/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [iconSource, setIconSource] =
    useState<IconProps['source']>('clipboard');

  return (
    <>
      <Button activateTarget="sample-id">
        <InlineStack>
          <Text>Copy to clipboard</Text>
          <Icon
            source={iconSource}
            appearance="monochrome"
          />
        </InlineStack>
      </Button>
      <ClipboardItem
        text="This text will be copied to the clipboard"
        id="sample-id"
        onCopy={() => {
          setIconSource('success');
          setTimeout(() => {
            setIconSource('clipboard');
          }, 2500);
        }}
        onCopyError={() => {
          setIconSource('error');
          setTimeout(() => {
            setIconSource('clipboard');
          }, 2500);
        }}
      />
    </>
  );
}
