import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="text" title="Text">
      <s-scroll-view>
        <s-text variant="body">body</s-text>
        <s-text variant="captionMedium">
          captionMedium
        </s-text>
        <s-text variant="captionRegular">
          captionRegular
        </s-text>
        <s-text variant="captionRegularTall">
          captionRegularTall
        </s-text>
        <s-text variant="display">
          display
        </s-text>
        <s-text variant="headingLarge">
          headingLarge
        </s-text>
        <s-text variant="headingSmall">
          headingSmall
        </s-text>
        <s-text variant="sectionHeader">
          sectionHeader
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextCritical"
        >
          TextCritical
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextDisabled"
        >
          TextDisabled
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextHighlight"
        >
          TextHighlight
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextInteractive"
        >
          TextInteractive
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextNeutral"
        >
          TextNeutral
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextSubdued"
        >
          TextSubdued
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextSuccess"
        >
          TextSuccess
        </s-text>
        <s-text
          variant="headingSmall"
          color="TextWarning"
        >
          TextWarning
        </s-text>
      </s-scroll-view>
    </s-screen>
  );
}
