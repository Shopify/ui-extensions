<form
  data-save-bar
  onSubmit={(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    console.log("Form data", formEntries);
  }}
  onReset={(event) => {
    console.log("Handle discarded changes if necessary");
  }}
>
      <s-page heading="Settings" inlineSize="small">
        {/* === */}
        {/* Store Information */}
        {/* === */}
        <s-section heading="Store Information">
          <s-text-field
            label="Store name"
            name="store-name"
            value="Puzzlify Store"
            placeholder="Enter store name"
          />
          <s-text-field
            label="Business address"
            name="business-address"
            value="123 Main St, Anytown, USA"
            placeholder="Enter business address"
          />
          <s-text-field
            label="Store phone"
            name="store-phone"
            value="+1 (555) 123-4567"
            placeholder="Enter phone number"
          />
          <s-choice-list label="Primary currency" name="currency">
            <s-choice value="usd" selected>
              US Dollar ($)
            </s-choice>
            <s-choice value="cad">Canadian Dollar (CAD)</s-choice>
            <s-choice value="eur">Euro (€)</s-choice>
          </s-choice-list>
        </s-section>

        {/* === */}
        {/* Notifications */}
        {/* === */}
        <s-section heading="Notifications">
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
            label="Notification types"
            name="notifications-type"
            multiple
          >
            <s-choice value="new-order" selected>
              New order notifications
            </s-choice>
            <s-choice value="low-stock">Low stock alerts</s-choice>
            <s-choice value="customer-review">
              Customer review notifications
            </s-choice>
            <s-choice value="shipping-updates">Shipping updates</s-choice>
          </s-choice-list>
        </s-section>

        {/* === */}
        {/* Preferences */}
        {/* === */}
        <s-section heading="Preferences">
          <s-box border="base" borderRadius="base">
            <s-clickable
              padding="small-100"
              href="/app/settings/shipping"
              accessibilityLabel="Configure shipping methods, rates, and fulfillment options"
            >
              <s-grid
                gridTemplateColumns="1fr auto"
                alignItems="center"
                gap="base"
              >
                <s-box>
                  <s-heading>Shipping & fulfillment</s-heading>
                  <s-paragraph color="subdued">
                    Shipping methods, rates, zones, and fulfillment preferences.
                  </s-paragraph>
                </s-box>
                <s-icon type="chevron-right" />
              </s-grid>
            </s-clickable>
            <s-box paddingInline="small-100">
              <s-divider />
            </s-box>

            <s-clickable
              padding="small-100"
              href="/app/settings/products_catalog"
              accessibilityLabel="Configure product defaults, customer experience, and catalog settings"
            >
              <s-grid
                gridTemplateColumns="1fr auto"
                alignItems="center"
                gap="base"
              >
                <s-box>
                  <s-heading>Products & catalog</s-heading>
                  <s-paragraph color="subdued">
                    Product defaults, customer experience, and catalog display
                    options.
                  </s-paragraph>
                </s-box>
                <s-icon type="chevron-right" />
              </s-grid>
            </s-clickable>
            <s-box paddingInline="small-100">
              <s-divider />
            </s-box>

            <s-clickable
              padding="small-100"
              href="/app/settings/customer_support"
              accessibilityLabel="Manage customer support settings and help resources"
            >
              <s-grid
                gridTemplateColumns="1fr auto"
                alignItems="center"
                gap="base"
              >
                <s-box>
                  <s-heading>Customer support</s-heading>
                  <s-paragraph color="subdued">
                    Support settings, help resources, and customer service
                    tools.
                  </s-paragraph>
                </s-box>
                <s-icon type="chevron-right" />
              </s-grid>
            </s-clickable>
          </s-box>
        </s-section>

        {/* === */}
        {/* Tools */}
        {/* === */}
        <s-section heading="Tools">
          <s-stack
            gap="none"
            border="base"
            borderRadius="base"
            overflow="hidden"
          >
            <s-box padding="small-100">
              <s-grid
                gridTemplateColumns="1fr auto"
                alignItems="center"
                gap="base"
              >
                <s-box>
                  <s-heading>Reset app settings</s-heading>
                  <s-paragraph color="subdued">
                    Reset all settings to their default values. This action
                    cannot be undone.
                  </s-paragraph>
                </s-box>
                <s-button tone="critical">Reset</s-button>
              </s-grid>
            </s-box>
            <s-box paddingInline="small-100">
              <s-divider />
            </s-box>

            <s-box padding="small-100">
              <s-grid
                gridTemplateColumns="1fr auto"
                alignItems="center"
                gap="base"
              >
                <s-box>
                  <s-heading>Export settings</s-heading>
                  <s-paragraph color="subdued">
                    Download a backup of all your current settings.
                  </s-paragraph>
                </s-box>
                <s-button>Export</s-button>
              </s-grid>
            </s-box>
          </s-stack>
      </s-section>
  </s-page>
</form>
