import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  return (
    <s-navigator initial-screen-name="ScreenOne">
      <s-screen name="ScreenOne" title="Screen One Title">
        <s-scroll-box>
          <s-button
            title="Navigate to Screen Two"
            onClick={() => shopify.navigation.navigate('ScreenTwo')}
          />
        </s-scroll-box>
      </s-screen>
      <s-screen name="ScreenTwo" title="Screen Two Title">
        <s-scroll-box>
          <s-button
            title="Navigate to Screen One"
            onClick={() => shopify.navigation.navigate('ScreenOne')}
          />
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
