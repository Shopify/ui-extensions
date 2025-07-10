import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen
            name="TextArea"
            title="Comment Input Example"
          >
            <s-scroll-view>
              <s-textArea
                label="Text"
                rows={4}
                placeholder="Input your text here"
                value={text}
                onchange={setText}
              />
              <s-text>{text}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}