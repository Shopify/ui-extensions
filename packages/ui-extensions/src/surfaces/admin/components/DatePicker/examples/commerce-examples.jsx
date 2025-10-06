<s-stack gap="base">
  <s-date-picker
    type="single"
    name="launch-date"
    disallow="past"
    view="2024-06"
  />

  <s-date-picker
    type="range"
    name="promotion-dates"
    value="2024-07-01--2024-07-31"
    view="2024-07"
    disallowDays="sunday"
  />

  <s-date-picker
    type="single"
    name="restock-date"
    disallow="past"
    disallowDays="saturday,sunday"
    view="2024-08"
  />
</s-stack>