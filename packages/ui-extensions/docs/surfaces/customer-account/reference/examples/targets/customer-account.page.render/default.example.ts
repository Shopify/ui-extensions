import {BlockStack, ResourceItem, extension, Image, Page, Card, Grid, GridItem} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  async (root) => {
    const response = await fetch(
      `https://your-backend.com/api/wishlists`,
    );
    const wishlists = await response.json();

    const app = root.createComponent(
      Grid,
      {
          columns: 250,
          rows: 'auto',
          spacing: 'base',
          blockAlignment: 'center'
      }
    );

    wishlists.forEach((wishlist) => {
      const gridItem = root.createComponent(GridItem, {
          columnSpan: 1,
      });
      const wishlistItem = root.createComponent(ResourceItem, {
        to: `/wishlist/${wishlist.id}`,
      })

      const image = root.createComponent(Image, {
        source: wishlist.items[0].productImage
      })

      const text = root.createText(wishlist.items[0].label)

      const contentWrapper = root.createComponent(BlockStack)

      contentWrapper.append(image);
      contentWrapper.append(text);
      wishlistItem.append(contentWrapper);

      gridItem.append(wishlistItem);
      app.append(gridItem);
    })

    const page = root.createComponent(Page, {
      title: 'Wishlists',
    })

    page.append(app);
    root.append(page);
  },
);
