import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  // You can navigate to any of these three screens since they all exist within the same Navigator.
  return (
    <s-navigator initial-screen-name="ScreenOne">
      <s-screen name="ScreenOne" title="Screen One Title">
        <s-scroll-box>
          <s-button
            title="Go to Screen Two"
            onClick={() => shopify.navigation.navigate('ScreenTwo')}
          />
        </s-scroll-box>
      </s-screen>
      <s-screen name="ScreenTwo" title="Screen Two Title">
        <s-scroll-box>
          <s-button
            title="Go to Screen Three"
            onClick={() => shopify.navigation.navigate('ScreenThree')}
          />
        </s-scroll-box>
      </s-screen>
      <s-screen name="ScreenThree" title="Screen Three Title">
        <s-scroll-box>
          <s-button
            title="Go to Screen One"
            onClick={() => shopify.navigation.navigate('ScreenOne')}
          />
        </s-scroll-box>
      </s-screen>
    </s-navigator>
  );
};
