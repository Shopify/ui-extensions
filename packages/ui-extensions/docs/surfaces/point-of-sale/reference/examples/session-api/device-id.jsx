import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const {deviceId} = shopify.session;
  const deviceGid = `gid://shopify/PointOfSaleDevice/${deviceId}`;

  return (
    <s-page heading="Device Details">
      <s-scroll-box>
        <s-text>Device ID: {deviceId}</s-text>
        <s-text>Device GID: {deviceGid}</s-text>
      </s-scroll-box>
    </s-page>
  );
};
