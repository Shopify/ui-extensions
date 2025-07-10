import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';
import {useApi} from '@shopify/ui-extensions/preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const api = useApi<'pos.home.modal.render'>();

  return (
    <s-navigator>
      <s-screen title="Section" name="Section">
        <s-scroll-view>
          <s-stack
            direction="vertical"
            paddingHorizontal="HalfPoint"
          >
            <s-section
              title="Items"
              action={{
                title: 'Show toast',
                onpress: () =>
                  api.toast.show('Hello world!'),
              }}
            >
              <s-selectable
                onpress={() =>
                  api.toast.show('Item 1!')
                }
              >
                <s-stack
                  direction="vertical"
                  paddingHorizontal="Small"
                  paddingVertical="Small"
                >
                  <s-text>Item 1</s-text>
                </s-stack>
              </s-selectable>
              <s-selectable
                onpress={() =>
                  api.toast.show('Item 2!')
                }
              >
                <s-stack
                  direction="vertical"
                  paddingHorizontal="Small"
                  paddingVertical="Small"
                >
                  <s-text>Item 2</s-text>
                </s-stack>
              </s-selectable>
              <s-selectable
                onpress={() =>
                  api.toast.show('Item 3!')
                }
              >
                <s-stack
                  direction="vertical"
                  paddingHorizontal="Small"
                  paddingVertical="Small"
                >
                  <s-text>Item 3</s-text>
                </s-stack>
              </s-selectable>
              <s-selectable
                onpress={() =>
                  api.toast.show('Item 4!')
                }
              >
                <s-stack
                  direction="vertical"
                  paddingHorizontal="Small"
                  paddingVertical="Small"
                >
                  <s-text>Item 4</s-text>
                </s-stack>
              </s-selectable>
            </s-section>
          </s-stack>
        </s-scroll-view>
      </s-screen>
    </s-navigator>
  );
}
