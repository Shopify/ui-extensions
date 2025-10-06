{
  /* Product launch date */
}
<s-date-picker
  type="single"
  name="launch-date"
  disallow="past"
  view="2024-06"
 />;

{
  /* Sales promotion period */
}
<s-date-picker
  type="range"
  name="promotion-dates"
  value="2024-07-01--2024-07-31"
  view="2024-07"
  disallowDays="sunday"
 />;

{
  /* Inventory restock scheduling */
}
<s-date-picker
  type="single"
  name="restock-date"
  disallow="past"
  disallowDays="saturday,sunday"
  view="2024-08"
 />