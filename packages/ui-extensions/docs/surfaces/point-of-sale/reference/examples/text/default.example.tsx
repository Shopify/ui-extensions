import React from 'react';

import { Screen, reactExtension, Text, ScrollView } from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  return (
    <Screen name='text' title='Text'>
      <ScrollView>
        <Text variant="body">body</Text>
        <Text variant="captionMedium">captionMedium</Text>
        <Text variant="captionRegular">captionRegular</Text>
        <Text variant="captionRegularTall">captionRegularTall</Text>
        <Text variant="display">display</Text>
        <Text variant="headingLarge">headingLarge</Text>
        <Text variant="headingSmall">headingSmall</Text>
        <Text variant="sectionHeader">sectionHeader</Text>
        <Text variant="headingSmall" color="TextCritical">
          TextCritical
        </Text>
        <Text variant="headingSmall" color="TextDisabled">
          TextDisabled
        </Text>
        <Text variant="headingSmall" color="TextHighlight">
          TextHighlight
        </Text>
        <Text variant="headingSmall" color="TextInteractive">
          TextInteractive
        </Text>
        <Text variant="headingSmall" color="TextNeutral">
          TextNeutral
        </Text>
        <Text variant="headingSmall" color="TextSubdued">
          TextSubdued
        </Text>
        <Text variant="headingSmall" color="TextSuccess">
          TextSuccess
        </Text>
        <Text variant="headingSmall" color="TextWarning">
          TextWarning
        </Text>
      </ScrollView>
    </Screen>
  );
}

export default reactExtension('pos.home.modal.render', () => {
  return <SmartGridModal />
})
