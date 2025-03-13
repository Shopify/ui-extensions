// Basic example for Grid
export default function extension() {
  const grid = document.createElement('s-grid');
  grid.columns = 3;
  grid.gap = '10px';
  const image1 = document.createElement('s-image');
  const image2 = document.createElement('s-image');
  const image3 = document.createElement('s-image');

  [image1, image2, image3].forEach((image) => {
    image.src = 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-shopping-bag-full-color-66166b2e55d67988b56b4bd28b63c271e2b9713358cb723070a92bde17ad7d63.svg';
    image.alt = 'Placeholder';
    image.sizes = '100vw';
    grid.appendChild(image);
  });

  document.body.appendChild(grid);
};