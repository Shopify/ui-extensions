import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Home">
      <s-selectable onpress={() => console.log('You tapped this row!')}>
        {/* Parent stack */}
        <s-stack
          direction="horizontal"
          alignment="space-between"
          paddingVertical={'Medium'}
          paddingHorizontal={'ExtraExtraLarge'}
        >
          {/* First child stack */}
          <s-stack direction="vertical" spacing={0.5}>
            <s-text>Hello world!</s-text>
            <s-text variant="captionRegular">
              This is an example of nested stacks!
            </s-text>
          </s-stack>
          {/* Second child stack */}
          <s-stack direction="vertical" flex={1} alignment="center">
            {/* Horizontal stack for the right label and chevron icon */}
            <s-stack direction="horizontal" spacing={2}>
              <s-text variant="captionRegular">Let's go!</s-text>
              <s-icon name="chevron-right" />
            </s-stack>
          </s-stack>
        </s-stack>
      </s-selectable>
    </s-screen>
  );
}
