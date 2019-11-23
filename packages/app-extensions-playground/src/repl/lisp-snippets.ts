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
    state: `{"id": "", "record": ""}`,
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
    state: `{
  "average-rating": "4.5",
  "total-number-of-reviews": "42"
}`,
  },
];

export default options;
