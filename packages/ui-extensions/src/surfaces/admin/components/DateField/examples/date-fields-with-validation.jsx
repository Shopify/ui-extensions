<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>