// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const authState =
    shopify.authenticationState.value;
  const isFullyAuthenticated =
    authState === 'fully_authenticated';

  async function handleEditProfile() {
    if (!isFullyAuthenticated) {
      await shopify.requireLogin();
      return;
    }
    shopify.navigation.navigate(
      'extension://profile/edit',
    );
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Account Settings
        </s-text>
        <s-text>
          {isFullyAuthenticated
            ? 'Manage your account preferences.'
            : 'Log in to manage your account.'}
        </s-text>
        <s-button onClick={handleEditProfile}>
          Edit profile
        </s-button>
      </s-stack>
    </s-box>
  );
}
