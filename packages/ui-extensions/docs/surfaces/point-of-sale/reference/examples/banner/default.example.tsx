import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen title="Home" name="Home">
      <s-scroll-view>
        <s-banner
          title="Information Banner"
          variant="information"
          action="Ok"
          visible
        />
        <s-banner
          title="Confirmation Banner"
          variant="confirmation"
          visible
        />
        <s-banner
          title="Alert Banner"
          variant="alert"
          visible
        />
        <s-banner
          title="Error Banner"
          variant="error"
          visible
        />
      </s-scroll-view>
    </s-screen>
  );
}
