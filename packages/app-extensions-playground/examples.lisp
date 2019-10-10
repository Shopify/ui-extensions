(Button
  (#
    "onClick" (lambda () (alert "Thanks!"))
  )
  "Click me"
)

(let (
  (App (lambda () (
    (Textfield
      (#
        "value" (get "message")
        "onChange" (lambda (value) (set "message" value))
      )
    )
    (Button
      (# "onClick" (lambda () (alert (get "message"))))
      "Alert"
    )
  )))
  )

  (App)
)

(Button (# "label" "Hello" "onClick" (lambda () (alert "Test"))))

(
  (Checkbox
    (#
      "caption" "Customize Message"
      "checked" (get "advancedSettings")
      "onChange" (lambda (value) (set "advancedSettings" value))
    )
  )
  (if (get "advancedSettings")
    (Textfield
      (#
        "value" (get "message")
        "onChange" (lambda (value) (set "message" value))
      )
    )
    ()
  )
  (Button
    (# "onClick" (lambda () (alert (get "message"))))
    "Alert"
  )
)

(let (
  (App (lambda () (
    (Checkbox
      (#
        "caption" "Customize Message"
        "checked" (get "advancedSettings")
        "onChange" (lambda (value) (set "advancedSettings" value))
      )
    )
  )
  (if (get "advancedSettings")
    (Textfield
      (#
        "value" (get "message")
        "onChange" (lambda (value) (set "message" value))
      )
    )
    ()
  )
  (Button
    (# "onClick" (lambda () (alert (get "message"))))
    "Alert"
  )
)

(Card
  (# label "Subscription settings")
  (
    (Checkbox (#
      "label" "Products in this collection are available for subscription"
      "checked" (get "availableForSubscription")
      "onChange" (set "availableForSubscription")
    ))
    (if (get "availableForSubscription")
      (
        (ChoiceList (#
          "label" "Subscription type"
          "onChange" (set "subscriptionType")
          "value" (get "subscriptionType")
          "choices" (
            (# "label" "One-time and subscription" "value" "one-time+subscription")
            (# "label" "Subscription only" "value" "subscription-only")
            (# "label" "Pre-paid subscription only" "value" "prepaid-subscription-only")
          )
        ))
        (FormGroup
          (#)
          (
            (Textfield (#
              "label" "Minimum number of shipments"
              "value" (get "minimumNumberOfShipments")
              "onChange" (set "minimumNumberOfShipments")
            ))
            (Select (#
              "label" "Shipping Interval"
              "onChange" (set "shippingInterval")
              "value" (get "shippingInterval")
              "options" (
                (# "label" "Days" "value" "days")
                (# "label" "Weeks" "value" "weeks")
                (# "label" "Months" "value" "months")
                )
              )
            )
          )
        )
      )
      ()
    )
  )
)

(Textfield (# "value" (get "value") "onChange" (set "value") "onValidate" (script "http://localhost/my-script.js")))

(
  (Card (#) (
    (Textfield (# "label"  "Query" "value" (get "query") "onChange" (set "query")))
    (Label (# "caption" (get "response" "title")))
  ))

  (watch "query" (lambda (query)
    (http-request "GET" (log (string-join "https://jsonplaceholder.typicode.com/todos/" query)) (set "response"))
  ))
)
