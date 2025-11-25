import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const showShortToast = () => {
    shopify.toast.show('Quick message', {duration: 2000});
  };

  const showLongToast = () => {
    shopify.toast.show('This is a longer notification', {duration: 8000});
  };

  return (
    <s-page heading="Toast with Duration">
      <s-scroll-box>
        <s-stack direction="block">
          <s-button onClick={showShortToast}>Show Short Toast (2s)</s-button>
          <s-button onClick={showLongToast}>Show Long Toast (8s)</s-button>
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};



