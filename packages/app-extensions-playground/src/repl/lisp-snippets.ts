export interface Snippet {
  label: string;
  code: string;
  state: string;
}

const options: Snippet[] = [
  {
    label: 'Simple Button',
    code: `
; Simple button
;
; Button with a label and click-handler.

(Button (#
  "label"   "Hello"
  "onClick" (alert "Test")))
    `.trim(),
    state: '[]',
  },
  {
    label: 'State',
    code: `
; State
;
; Form fields with controlled local state.

((Textfield (#
   "value"    (get "message")
   "onChange" (set "message")))

 (Button (#
   "label"   "Alert"
   "onClick" (alert (get "message")))))
    `.trim(),
    state: `[{"id": "gid://Shopify/Metafield/1", "key": "message", "value": "Hello World"}]`,
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
    state: `[
      {"id": "gid://Shopify/Metafield/1", "key": "advancedSettings", "value": false},
      {"id": "gid://Shopify/Metafield/2", "key": "message", "value": "Hello World"}
    ]`,
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
    state: `[
      {"id": "gid://Shopify/Metafield/1", "key": "minimumNumberOfShipments", "value": "1"},
      {"id": "gid://Shopify/Metafield/2", "key": "shippingInterval", "value": "days"},
      {"id": "gid://Shopify/Metafield/3", "key": "subscriptionType", "value": ""},
      {"id": "gid://Shopify/Metafield/4", "key": "availableForSubscription", "value": false}
    ]`,
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
    state: `[
      {"id": "gid://Shopify/Metafield/1", "key": "value", "value": "Hello World"}
    ]`,
  },
  {
    label: 'Side-Effects & HTTP',
    code: `
; Side-effects & HTTP
;
; Remote data calls based on form interactions.

((Card (#)
  ((Textfield (#
     "label"  "Record ID"
     "value"  (get "id")
     "onChange" (set "id")))

   (Label (# "caption" (get "record" "title")))))

 (watch "id" (lambda (id)
   (http-request "GET"
     (log (string-join "https://jsonplaceholder.typicode.com/todos/" id))
     (set "record")))))
    `.trim(),
    state: `[
      {"id": "gid://Shopify/Metafield/1", "key": "id", "value": ""},
      {"id": "gid://Shopify/Metafield/2", "key": "record", "value": ""}
    ]`,
  },
  {
    label: 'Charts',
    code: `
; Charts
;
; Chart drawing with the canvas element.

(Chart (# "onLoad" (script "/draw.js")))
    `.trim(),
    state: '[]',
  },
  {
    label: 'Product Reviews',
    code: `; Product Reviews
(Card (# "label" "Product Reviews") (
  (Stack (#) (
    (StackItem (# "fill" true) (Label (# "caption" "Average Rating")))
    (StarRating (# "rating" (get "average-rating") "totalReviews" (get "total-number-of-reviews")))
  ))
  (Stack (#)
    (Button (# "label" "Read all reviews …")))))`,
    state: `[
  {"id": "gid://Shopify/Metafield/1", "key": "average-rating", "value": "4.5"},
  {"id": "gid://Shopify/Metafield/2", "key": "total-number-of-reviews", "value": "42"}
]`,
  },
];

export default options;
