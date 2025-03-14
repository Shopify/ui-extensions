// Basic example for Banner
export default function extension() {
  const banner = document.createElement('s-banner');
  banner.heading = 'Success';
  banner.message = 'Your action was successful';
  banner.tone = 'success';
  banner.dismissible = true;
  banner.onDismiss = () => {
    console.log('Banner closed');
  };

  document.body.appendChild(banner);
}
