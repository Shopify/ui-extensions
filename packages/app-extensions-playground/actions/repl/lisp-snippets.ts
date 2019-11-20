export interface Snippet {
  label: string;
  code: string;
  state: string;
}

const options: Snippet[] = [
  {
    label: 'Simple Button',
    code: `(Button (#
  "label"   "Hello"
  "onClick" (alert "Test")))
    `.trim(),
    state: '{}',
  },
  {
    label: 'State',
    code: `((Textfield (#
   "value"    (get "message")
   "onChange" (set "message")))

 (Button (#
   "label"   "Alert"
   "onClick" (alert (get "message")))))
    `.trim(),
    state: `{"message": "Hello World"}`,
  },
  {
    label: 'Dynamic Rendering',
    code: `
; Dynamic rendering
;
; Conditional logic interacting with controlled local state.

((Checkbox (#
   "label"    "Customize Message"
   "checked"  (get "advancedSettings")
   "onChange" (set "advancedSettings")))

 (if (get "advancedSettings")
   (Textfield (#
     "value"    (get "message")
     "onChange" (set "message" value)))
   ())

 (Button (#
   "onClick" (alert (get "message"))
   "label" "Alert")))
    `.trim(),
    state: `{
  "advancedSettings": false,
  "message": "Hello World"
}`,
  },
  {
    label: 'Checkout Example',
    code: `
; Checkout example
;
; Dynamic fields with conditional logic and rendering.

(Card (# label "Subscription settings")
  ((Checkbox (#
     "label"    "Products in this collection are available for subscription"
     "checked"  (get "availableForSubscription")
     "onChange" (set "availableForSubscription")))

   ; Conditionally show form
   (if (get "availableForSubscription")
     ((ChoiceList (#
        "label"    "Subscription type"
        "onChange" (set "subscriptionType")
        "value"    (get "subscriptionType")
        "choices" (
           (# "label" "One-time and subscription" "value" "one-time+subscription")
           (# "label" "Subscription only" "value" "subscription-only")
           (# "label" "Pre-paid subscription only" "value" "prepaid-subscription-only"))))

      (FormGroup (#)
        ((Textfield (#
            "label"    "Minimum number of shipments"
            "value"    (get "minimumNumberOfShipments")
            "onChange" (set "minimumNumberOfShipments")))

         (Select (#
           "label"    "Shipping Interval"
           "onChange" (set "shippingInterval")
           "value"    (get "shippingInterval")
           "options" (
             (# "label" "Days" "value" "days")
             (# "label" "Weeks" "value" "weeks")
             (# "label" "Months" "value" "months")))))))

     ; Empty else
     ())))
    `.trim(),
    state: `{
  "minimumNumberOfShipments": "1",
  "shippingInterval": "days",
  "subscriptionType": "",
  "availableForSubscription": false
}`,
  },
  {
    label: 'Client-Side Validation',
    code: `
; Client-side validation
;
; Form validation using client-side logic.

(Textfield (#
  "value"      (get "value")
  "onChange"   (set "value")
  "onValidate" (script "/validate.js")))
    `.trim(),
    state: `{"value": "Hello World"}`,
  },
];

export default options;
