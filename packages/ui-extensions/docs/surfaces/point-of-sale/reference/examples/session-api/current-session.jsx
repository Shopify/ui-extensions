import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const session = shopify.session.currentSession;

  return (
    <s-page heading="Current Session">
      <s-scroll-box>
        <s-stack direction="block">
          <s-section heading="Shop Information">
            <s-text>Shop ID: {session.shopId}</s-text>
            <s-text>Shop Domain: {session.shopDomain}</s-text>
            <s-text>Currency: {session.currency}</s-text>
          </s-section>
          <s-section heading="User & Staff">
            <s-text>User ID: {session.userId}</s-text>
            <s-text>Location ID: {session.locationId}</s-text>
            {session.staffMemberId && (
              <s-text>Staff Member ID: {session.staffMemberId}</s-text>
            )}
          </s-section>
          <s-section heading="System">
            <s-text>POS Version: {session.posVersion}</s-text>
          </s-section>
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
};



