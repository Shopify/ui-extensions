<s-page heading="Edit product" inlineSize="base">
  <s-link slot="breadcrumb-actions" href="/products">Products</s-link>

  <s-button slot="primary-action" variant="primary" id="save-btn" disabled>Save</s-button>
  <s-button slot="secondary-actions">Preview</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete</s-button>

  <s-section>
    <s-stack direction="block" gap="base">
      <s-text-field label="Title" name="title" value="Blue T-Shirt" required></s-text-field>
      <s-text-area label="Description" name="description" rows="4"></s-text-area>
      <s-number-field label="Price" name="price"></s-number-field>
    </s-stack>
  </s-section>

  <s-box slot="aside">
    <s-section>
      <s-stack direction="block" gap="base">
        <s-heading>Status</s-heading>
        <s-select label="Status" name="status">
          <option value="draft">Draft</option>
          <option value="active">Active</option>
        </s-select>
      </s-stack>
    </s-section>
  </s-box>
</s-page>

// In your component:
// const form = document.querySelector('s-section');
// const saveBtn = document.getElementById('save-btn');
//
// form.addEventListener('input', () => {
//   saveBtn.disabled = false;
// });
