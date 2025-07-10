import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen
          name="SegmentedControl"
          title="SegmentedControl"
        >
          <s-stack
            direction="vertical"
            paddingHorizontal="ExtraExtraLarge"
          >
            <s-segmented-control
              segments={[
                {
                  id: '1',
                  label: '1',
                  disabled: false,
                },
                {
                  id: '2',
                  label: '2',
                  disabled: false,
                },
                {
                  id: '3',
                  label: '3 (disabled)',
                  disabled: true,
                },
              ]}
              selected={selected}
              onselect={setSelected}
            />
          </s-stack>
        </s-screen>
  );
}