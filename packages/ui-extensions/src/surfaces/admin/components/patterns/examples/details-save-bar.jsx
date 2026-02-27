<form
  data-save-bar
  onSubmit={(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    console.log("Form submitted", formEntries);
  }}
  onReset={(event) => {
    console.log("Changes discarded");
  }}
>
  <s-section heading="Basic information">
    <s-box border="base" borderRadius="base" padding="base">
      <s-stack direction="block" gap="base">
        <s-text-field
          label="Title"
          name="title"
          value="Premium Cotton T-Shirt"
          helpText="Minimum 10 characters recommended"
        />
        <s-text-area
          label="Description"
          name="description"
          value="Our premium cotton t-shirt is made from 100% organic cotton."
          rows={4}
        />
      </s-stack>
    </s-box>
  </s-section>
</form>
