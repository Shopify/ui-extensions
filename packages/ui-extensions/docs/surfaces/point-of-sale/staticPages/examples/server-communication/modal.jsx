import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default function extension() {
  render(<SmartGridModal />, document.body);
}

function SmartGridModal() {
  const [authenticated, setAuthenticated] = useState();
  const [error, setError] = useState();
  const [sessionToken, setSessionToken] = useState();

  useEffect(() => {
    shopify.session.getSessionToken().then((token) => {
      setSessionToken(token);
      fetch('https://YOUR_DEVELOPMENT_SERVER/api/extensions/test', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => setAuthenticated(response.status))
        .catch(setError);
    });
  }, []);

  return (
    <s-page title="Authentication example">
      <s-box padding="base">
        <s-stack gap="base">
          <s-text>Token: {sessionToken}</s-text>
          <s-text>Authenticated: {authenticated}</s-text>
          <s-text>Error: {error}</s-text>
        </s-stack>
      </s-box>
    </s-page>
  );
}
