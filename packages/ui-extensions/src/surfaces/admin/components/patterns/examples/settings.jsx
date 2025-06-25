// ===
// Settings page pattern
// ===

export default function SettingsPage() {
  const handleFormReset = (event) => {
    console.log("Handle discarded changes if necessary");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    console.log("Form data", formEntries);
  };

  return (
    <form data-save-bar onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <s-page>
        {/* === */}
        {/* Title Bar */}
        {/* Note: ui-title-bar requires AppBridge to render correctly */}
        {/* === */}
        <ui-title-bar title="Settings"></ui-title-bar>
        {/* === */}
        {/* Store settings */}
        {/* === */}
        <s-grid gap="base">
          <s-grid
            gridTemplateColumns="@container (inline-size <= 700px) 1fr, 2fr 5fr"
            gap="base"
          >
            {/* Left column */}
            <s-box>
              <s-heading>Store Settings</s-heading>
              <s-paragraph>Manage your store information</s-paragraph>
            </s-box>
            {/* Right column */}
            <s-section accessibilityLabel="Store information section">
              {/* Card-like container with border and padding */}
              <s-box
                padding="base"
                border="base"
                borderStyle="solid"
                borderRadius="base"
              >
                <s-grid gap="base">
                  <s-stack direction="inline" justifyContent="space-between">
                    <s-stack
                      direction="inline"
                      alignItems="center"
                      gap="small-200"
                    >
                      <s-icon type="store"></s-icon>
                      <s-paragraph>Puzzlify Store</s-paragraph>
                    </s-stack>
                    {/* Icon-only button requires accessibilityLabel for screen readers */}
                    <s-button
                      icon="edit"
                      variant="tertiary"
                      tone="neutral"
                      accessibilityLabel="Edit store name"
                    ></s-button>
                  </s-stack>
                  <s-divider></s-divider>
                  <s-stack
                    direction="inline"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <s-stack
                      direction="inline"
                      alignItems="center"
                      gap="small-200"
                    >
                      <s-icon type="location"></s-icon>
                      <s-box>
                        <s-paragraph>Business address</s-paragraph>
                        <s-paragraph>Puzzle Retailer</s-paragraph>
                      </s-box>
                    </s-stack>
                    <s-box>
                      {/* Icon-only button requires accessibilityLabel for screen readers */}
                      <s-button
                        icon="edit"
                        variant="tertiary"
                        tone="neutral"
                        accessibilityLabel="Edit business address"
                      ></s-button>
                    </s-box>
                  </s-stack>
                </s-grid>
              </s-box>
            </s-section>
          </s-grid>

          {/* === */}
          {/* Product defaults */}
          {/* === */}
          <s-grid
            gridTemplateColumns="@container (inline-size <= 700px) 1fr, 2fr 5fr"
            gap="base"
          >
            {/* Left column */}
            <s-box>
              <s-heading>Product Defaults</s-heading>
              <s-paragraph>Set default options for new puzzles</s-paragraph>
            </s-box>
            {/* Right column */}
            <s-section accessibilityLabel="Product defaults section">
              <s-grid gap="base">
                <s-grid gap="base">
                  <s-select
                    label="Default puzzle size"
                    name="default-puzzle-size"
                  >
                    <s-option value="small">Small (9" x 9")</s-option>
                    <s-option value="medium" selected>
                      Medium (18" x 24")
                    </s-option>
                    <s-option value="large">Large (24" x 36")</s-option>
                  </s-select>
                  <s-select
                    label="Default piece count"
                    name="default-piece-count"
                  >
                    <s-option value="250" selected>
                      250 pieces (Easy)
                    </s-option>
                    <s-option value="500">500 pieces (Medium)</s-option>
                    <s-option value="1000">1000 pieces (Hard)</s-option>
                    <s-option value="2000">2000 pieces (Expert)</s-option>
                  </s-select>
                  <s-select label="Default material" name="default-material">
                    <s-option value="standard" selected>
                      Standard cardboard
                    </s-option>
                    <s-option value="premium">Premium cardboard</s-option>
                    <s-option value="wooden">Wooden pieces</s-option>
                  </s-select>
                  {/* switches (rather than checkboxes) should be used to enable/disable a single option */}
                  <s-switch
                    label="Include reference image"
                    name="include-reference-image"
                    details="Ship a reference image with the puzzle"
                  ></s-switch>
                </s-grid>
              </s-grid>
            </s-section>
          </s-grid>

          {/* === */}
          {/* Customer experience */}
          {/* === */}
          <s-grid
            gridTemplateColumns="@container (inline-size <= 700px) 1fr, 2fr 5fr"
            gap="base"
          >
            {/* Left column */}
            <s-box>
              <s-heading>Puzzle Experience</s-heading>
              <s-paragraph>
                Configure how customers interact with your puzzles
              </s-paragraph>
            </s-box>
            {/* Right column */}
            <s-section accessibilityLabel="Puzzle experience settings">
              <s-grid gap="base">
                <s-choice-list
                  label="Default puzzle packaging style"
                  name="packaging-style"
                  details="This will be used for all new puzzles"
                >
                  <s-choice
                    label="Standard box with preview image"
                    value="standard-preview"
                    selected
                  ></s-choice>
                  <s-choice
                    label="Mystery box (no preview)"
                    value="mystery"
                  ></s-choice>
                  <s-choice
                    label="Gift packaging with ribbon"
                    value="gift"
                  ></s-choice>
                  <s-choice
                    label="Eco-friendly minimal packaging"
                    value="eco"
                  ></s-choice>
                </s-choice-list>
              </s-grid>
            </s-section>
          </s-grid>

          {/* === */}
          {/* Catalog settings */}
          {/* === */}
          <s-grid
            gridTemplateColumns="@container (inline-size <= 700px) 1fr, 2fr 5fr"
            gap="base"
          >
            {/* Left column */}
            <s-box>
              <s-heading>Catalog Settings</s-heading>
              <s-paragraph>Configure your online puzzle catalog</s-paragraph>
            </s-box>
            {/* Right column */}
            <s-section accessibilityLabel="Catalog settings section">
              <s-grid gap="base">
                <s-grid gap="base">
                  <s-select label="Default sorting" name="default-sorting">
                    <s-option value="newest" selected>
                      Newest first
                    </s-option>
                    <s-option value="bestselling">Best selling</s-option>
                    <s-option value="price-low">Price: Low to high</s-option>
                    <s-option value="price-high">Price: High to low</s-option>
                  </s-select>
                  <s-choice-list
                    label="Display options"
                    name="display-options"
                    multiple
                  >
                    <s-choice
                      label="Show difficulty levels"
                      value="show-difficulty"
                      selected
                    ></s-choice>
                    <s-choice
                      label="Show piece counts"
                      value="show-piece-count"
                    ></s-choice>
                    <s-choice
                      label="Show dimensions"
                      value="show-dimensions"
                    ></s-choice>
                  </s-choice-list>
                </s-grid>
              </s-grid>
            </s-section>
          </s-grid>

          {/* === */}
          {/* Order notifications */}
          {/* === */}
          <s-grid
            gridTemplateColumns="@container (inline-size <= 700px) 1fr, 2fr 5fr"
            gap="base"
          >
            {/* Left column */}
            <s-box>
              <s-heading>Order Notifications</s-heading>
              <s-paragraph>Manage your business notifications</s-paragraph>
            </s-box>
            {/* Right column */}
            <s-section accessibilityLabel="Order notifications section">
              <s-grid gap="base">
                <s-grid gap="base">
                  <s-select
                    label="Notification frequency"
                    name="notification-frequency"
                  >
                    <s-option value="immediately" selected>
                      Immediately
                    </s-option>
                    <s-option value="hourly">Hourly digest</s-option>
                    <s-option value="daily">Daily digest</s-option>
                  </s-select>
                  <s-choice-list
                    label="Notifications type"
                    name="notifications-type"
                    multiple
                  >
                    <s-choice
                      label="New order notifications"
                      value="new-order"
                      selected
                    ></s-choice>
                    <s-choice
                      label="Low stock alerts"
                      value="low-stock"
                    ></s-choice>
                    <s-choice
                      label="Customer review notifications"
                      value="customer-review"
                    ></s-choice>
                    <s-choice
                      label="Shipping updates"
                      value="shipping-updates"
                    ></s-choice>
                  </s-choice-list>
                </s-grid>
              </s-grid>
            </s-section>
          </s-grid>

          {/* === */}
          {/* Shipping settings */}
          {/* === */}
          <s-grid
            gridTemplateColumns="@container (inline-size <= 700px) 1fr, 2fr 5fr"
            gap="base"
          >
            {/* Left column */}
            <s-box>
              <s-heading>Shipping</s-heading>
              <s-paragraph>Configure shipping settings</s-paragraph>
            </s-box>
            {/* Right column */}
            <s-section accessibilityLabel="Shipping settings section">
              <s-grid gap="base">
                <s-select
                  label="Default shipping method"
                  name="default-shipping-method"
                >
                  <s-option value="standard" selected>
                    Standard shipping
                  </s-option>
                  <s-option value="express">Express shipping</s-option>
                  <s-option value="free">Free shipping (over $50)</s-option>
                </s-select>
                <s-choice-list
                  label="Shipping preferences"
                  name="shipping-preferences"
                  multiple
                >
                  <s-choice
                    label="Calculate shipping based on weight"
                    value="calculate-shipping"
                    selected
                  ></s-choice>
                  <s-choice
                    label="Offer international shipping"
                    value="international-shipping"
                  ></s-choice>
                  <s-choice
                    label="Show estimated delivery dates"
                    value="estimated-delivery-dates"
                  ></s-choice>
                </s-choice-list>
              </s-grid>
            </s-section>
          </s-grid>
        </s-grid>
      </s-page>
    </form>
  );
}
