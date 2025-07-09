import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Dialog" title="Dialog Title">
          <s-button
            title="Show dialog"
            onpress={() => setVisible(true)}
          />
          <s-dialog
            type="error"
            title="Dialog title"
            content="Dialog content"
            actionText="Primary action"
            onAction={handlePrimaryAction}
            secondaryActionText="Secondary action"
            onSecondaryAction={handleSecondaryAction}
            isVisible={visible}
          />
        </s-screen>
  );
}