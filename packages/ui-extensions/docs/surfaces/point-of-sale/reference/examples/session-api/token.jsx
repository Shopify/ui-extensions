import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const [sessionToken, setSessionToken] = useState();
  const {shopId, userId, locationId, staffMemberId} = shopify.session.currentSession;

  useEffect(() => {
    shopify.session.getSessionToken().then((newToken) => {
      setSessionToken(newToken);
    });
  }, []);

  return (
    <s-screen name="ScreenOne" title="Screen One Title">
      <s-scroll-box>
        <s-text>
          shopId: {shopId}, userId: {userId}, locationId: {locationId}, staffId: {staffMemberId}
        </s-text>
        <s-text>sessionToken: {sessionToken}</s-text>
      </s-scroll-box>
    </s-screen>
  );
};
