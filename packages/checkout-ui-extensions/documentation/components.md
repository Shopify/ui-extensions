{% include /apps/checkout/plus-merchants.md %}

You can use checkout components to build app extensions that feel at home in any checkout experience.

Checkout UI extensions provide UI components that a [rendering extension](./rendering.md) can use to build an interface. Shopify renders the UI natively, so it's performant, accessible, and works in all of checkout's supported browsers.

## Components as building blocks

Checkout components are designed to be flexible, enabling you to layer and mix them to create highly-customized app extensions that feel seamless within the checkout experience.

{% resource_card_container %}
  {% resource_card
    type: :library,
    link: "https://www.figma.com/community/file/1121180079120732846",
    title: "Figma UI kit"
  %}
    Prototype checkout UI extensions faster with Shopify's public Figma component library
  {% endresource_card %}
{% endresource_card_container %}

<div class="checkout-component-grid">
  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Structure</h3>
      <p><code><a href="../src/components/BlockLayout">BlockLayout</a></code></p>
      <p><code><a href="../src/components/BlockSpacer">BlockSpacer</a></code></p>
      <p><code><a href="../src/components/BlockStack">BlockStack</a></code></p>
      <p><code><a href="../src/components/Divider">Divider</a></code></p>
      <p><code><a href="../src/components/Grid">Grid</a></code> and <code><a href="../src/components/GridItem">GridItem</a></code></p>
      <p><code><a href="../src/components/InlineLayout">InlineLayout</a></code></p>
      <p><code><a href="../src/components/InlineSpacer">InlineSpacer</a></code></p>
      <p><code><a href="../src/components/InlineStack">InlineStack</a></code></p>
      <p><code><a href="../src/components/View">View</a></code></p>
      <p><code><a href="../src/components/ScrollView">ScrollView</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Titles and text</h3>
      <p><code><a href="../src/components/Text">Text</a></code></p>
      <p><code><a href="../src/components/TextBlock">TextBlock</a></code></p>
      <p><code><a href="../src/components/Heading">Heading</a></code></p>
      <p><code><a href="../src/components/HeadingGroup">HeadingGroup</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Forms</h3>
      <p><code><a href="../src/components/Checkbox">Checkbox</a></code></p>
      <p><code><a href="../src/components/ChoiceList">ChoiceList</a></code> and <code><a href="../src/components/Choice">Choice</a></code></p>
      <p><code><a href="../src/components/Form">Form</a></code></p>
      <p><code><a href="../src/components/PhoneField">PhoneField</a></code></p>
      <p><code><a href="../src/components/Select">Select</a></code></p>
      <p><code><a href="../src/components/Stepper">Stepper</a></code></p>
      <p><code><a href="../src/components/TextField">TextField</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Feedback</h3>
      <p><code><a href="../src/components/Banner">Banner</a></code></p>
      <p><code><a href="../src/components/SkeletonImage">SkeletonImage</a></code></p>
      <p><code><a href="../src/components/SkeletonText">SkeletonText</a></code></p>
      <p><code><a href="../src/components/SkeletonTextBlock">SkeletonTextBlock</a></code></p>
      <p><code><a href="../src/components/Spinner">Spinner</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Media</h3>
      <p><code><a href="../src/components/Image">Image</a></code></p>
      <p><code><a href="../src/components/Icon">Icon</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Actions</h3>
      <p><code><a href="../src/components/Button">Button</a></code></p>
      <p><code><a href="../src/components/Link">Link</a></code></p>
      <p><code><a href="../src/components/Pressable">Pressable</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Overlays</h3>
      <p><code><a href="../src/components/Modal">Modal</a></code></p>
      <p><code><a href="../src/components/Tooltip">Tooltip</a></code></p>
      <p><code><a href="../src/components/Popover">Popover</a></code></p>
  </div>

  <div class="checkout-component-grid-item">
    <h3 class="checkout-component-grid-item_title">Other</h3>
      <p><code><a href="../src/components/List">List</a></code> and <code><a href="../src/components/ListItem">ListItem</a></code></p>
      <p><code><a href="../src/components/Tag">Tag</a></code></p>
  </div>
</div>

## Merchant branding

Merchants can apply their own branding to checkout. Checkout brand settings are automatically applied to the UI components for building the extension.

<video style="width: 100%; height: auto;" autoplay muted loop controls>
  <source src="/assets/apps/checkout/branding.webm" type="video/webm">
  <source src="/assets/apps/checkout/branding.mp4" type="video/mp4">
</video>
