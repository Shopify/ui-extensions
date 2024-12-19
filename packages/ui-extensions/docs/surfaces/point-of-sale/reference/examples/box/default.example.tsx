import React from 'react';

import {
  Box,
  Image,
  Navigator,
  Screen,
  ScrollView,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const ImageModal = () => {
  return (
    <Navigator>
      <Screen name="ImageBox" title="ImageBox">
        <ScrollView>
          <Box
            blockSize="100px"
            inlineSize="100px"
            paddingInlineStart="100"
            paddingInlineEnd="100"
            paddingBlockEnd="100"
            paddingBlockStart="100"
          >
            <Image
              src="example.png"
              size="contain"
            />
          </Box>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension(
  'pos.home.modal.render',
  () => <ImageModal />,
);
