export interface Snippet {
  label: string;
  code: string;
  state: string;
  json: string;
}

const options: Snippet[] = [
  {
    label: 'Simple Button',
    code: `(Button (#
  "label"   "Hello"
  "onClick" (alert "Test")))
    `.trim(),
    state: '{}',
    json: `[{
      "value": "Button",
      "type": "identifier"
    },
    [{
        "value": "#",
        "type": "identifier"
      },
      {
        "value": "label",
        "type": "literal"
      },
      {
        "value": "Hello",
        "type": "literal"
      },
      {
        "value": "onClick",
        "type": "literal"
      },
      [{
          "value": "alert",
          "type": "identifier"
        },
        {
          "value": "Test",
          "type": "literal"
        }
      ]
    ]
  ]`,
  },
  {
    label: 'State',
    code: `(FormLayout (#) (
 (TextField (#
   "value"    (get "message")
   "onChange" (set "message")))

 (Button (#
   "label"   "Alert"
   "onClick" (alert (get "message"))))))
    `.trim(),
    json: `[
      [{
          "value": "TextField",
          "type": "identifier"
        },
        [{
            "value": "#",
            "type": "identifier"
          },
          {
            "value": "value",
            "type": "literal"
          },
          [{
              "value": "get",
              "type": "identifier"
            },
            {
              "value": "message",
              "type": "literal"
            }
          ],
          {
            "value": "onChange",
            "type": "literal"
          },
          [{
              "value": "set",
              "type": "identifier"
            },
            {
              "value": "message",
              "type": "literal"
            }
          ]
        ]
      ],
      [{
          "value": "Button",
          "type": "identifier"
        },
        [{
            "value": "#",
            "type": "identifier"
          },
          {
            "value": "label",
            "type": "literal"
          },
          {
            "value": "Alert",
            "type": "literal"
          },
          {
            "value": "onClick",
            "type": "literal"
          },
          [{
              "value": "alert",
              "type": "identifier"
            },
            [{
                "value": "get",
                "type": "identifier"
              },
              {
                "value": "message",
                "type": "literal"
              }
            ]
          ]
        ]
      ]
    ]`,
    state: `{"message": "Hello World"}`,
  },
  {
    label: 'Dynamic Rendering',
    code: `
((Checkbox (#
   "label"    "Customize Message"
   "checked"  (get "advancedSettings")
   "onChange" (set "advancedSettings")))

 (if (get "advancedSettings")
   (TextField (#
     "value"    (get "message")
     "onChange" (set "message" value)))
   ())

 (Button (#
   "onClick" (alert (get "message"))
   "label" "Alert")))
    `.trim(),
    json: `[
      [{
          "value": "Checkbox",
          "type": "identifier"
        },
        [{
            "value": "#",
            "type": "identifier"
          }, {
            "value": "label",
            "type": "literal"
          }, {
            "value": "Customize Message",
            "type": "literal"
          }, {
            "value": "checked",
            "type": "literal"
          },
          [{
            "value": "get",
            "type": "identifier"
          }, {
            "value": "advancedSettings",
            "type": "literal"
          }], {
            "value": "onChange",
            "type": "literal"
          },
          [{
            "value": "set",
            "type": "identifier"
          }, {
            "value": "advancedSettings",
            "type": "literal"
          }]
        ]
      ],
      [{
          "value": "if",
          "type": "identifier"
        },
        [{
          "value": "get",
          "type": "identifier"
        }, {
          "value": "advancedSettings",
          "type": "literal"
        }],
        [{
            "value": "TextField",
            "type": "identifier"
          },
          [{
              "value": "#",
              "type": "identifier"
            }, {
              "value": "value",
              "type": "literal"
            },
            [{
              "value": "get",
              "type": "identifier"
            }, {
              "value": "message",
              "type": "literal"
            }], {
              "value": "onChange",
              "type": "literal"
            },
            [{
              "value": "set",
              "type": "identifier"
            }, {
              "value": "message",
              "type": "literal"
            }, {
              "value": "value",
              "type": "identifier"
            }]
          ]
        ],
        []
      ],
      [{
          "value": "Button",
          "type": "identifier"
        },
        [{
            "value": "#",
            "type": "identifier"
          }, {
            "value": "onClick",
            "type": "literal"
          },
          [{
              "value": "alert",
              "type": "identifier"
            },
            [{
              "value": "get",
              "type": "identifier"
            }, {
              "value": "message",
              "type": "literal"
            }]
          ], {
            "value": "label",
            "type": "literal"
          }, {
            "value": "Alert",
            "type": "literal"
          }
        ]
      ]
    ]`,
    state: `{
  "advancedSettings": false,
  "message": "Hello World"
}`,
  },
  {
    label: 'Checkout Example',
    code: `
(Card (# "label" "Subscription settings")
  ((Checkbox (#
     "label"    "Products in this collection are available for subscription"
     "checked"  (get "availableForSubscription")
     "onChange" (set "availableForSubscription")))

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
        ((TextField (#
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
     ())))
    `.trim(),
    json: `[{
      "value": "Card",
      "type": "identifier"
    },
    [{
      "value": "#",
      "type": "identifier"
    }, {
      "value": "label",
      "type": "identifier"
    }, {
      "value": "Subscription settings",
      "type": "literal"
    }],
    [
      [{
          "value": "Checkbox",
          "type": "identifier"
        },
        [{
            "value": "#",
            "type": "identifier"
          }, {
            "value": "label",
            "type": "literal"
          }, {
            "value": "Products in this collection are available for subscription",
            "type": "literal"
          }, {
            "value": "checked",
            "type": "literal"
          },
          [{
            "value": "get",
            "type": "identifier"
          }, {
            "value": "availableForSubscription",
            "type": "literal"
          }], {
            "value": "onChange",
            "type": "literal"
          },
          [{
            "value": "set",
            "type": "identifier"
          }, {
            "value": "availableForSubscription",
            "type": "literal"
          }]
        ]
      ], {
        "value": ";",
        "type": "identifier"
      }, {
        "value": "Conditionally",
        "type": "identifier"
      }, {
        "value": "show",
        "type": "identifier"
      }, {
        "value": "form",
        "type": "identifier"
      },
      [{
          "value": "if",
          "type": "identifier"
        },
        [{
          "value": "get",
          "type": "identifier"
        }, {
          "value": "availableForSubscription",
          "type": "literal"
        }],
        [
          [{
              "value": "ChoiceList",
              "type": "identifier"
            },
            [{
                "value": "#",
                "type": "identifier"
              }, {
                "value": "label",
                "type": "literal"
              }, {
                "value": "Subscription type",
                "type": "literal"
              }, {
                "value": "onChange",
                "type": "literal"
              },
              [{
                "value": "set",
                "type": "identifier"
              }, {
                "value": "subscriptionType",
                "type": "literal"
              }], {
                "value": "value",
                "type": "literal"
              },
              [{
                "value": "get",
                "type": "identifier"
              }, {
                "value": "subscriptionType",
                "type": "literal"
              }], {
                "value": "choices",
                "type": "literal"
              },
              [
                [{
                  "value": "#",
                  "type": "identifier"
                }, {
                  "value": "label",
                  "type": "literal"
                }, {
                  "value": "One-time and subscription",
                  "type": "literal"
                }, {
                  "value": "value",
                  "type": "literal"
                }, {
                  "value": "one-time+subscription",
                  "type": "literal"
                }],
                [{
                  "value": "#",
                  "type": "identifier"
                }, {
                  "value": "label",
                  "type": "literal"
                }, {
                  "value": "Subscription only",
                  "type": "literal"
                }, {
                  "value": "value",
                  "type": "literal"
                }, {
                  "value": "subscription-only",
                  "type": "literal"
                }],
                [{
                  "value": "#",
                  "type": "identifier"
                }, {
                  "value": "label",
                  "type": "literal"
                }, {
                  "value": "Pre-paid subscription only",
                  "type": "literal"
                }, {
                  "value": "value",
                  "type": "literal"
                }, {
                  "value": "prepaid-subscription-only",
                  "type": "literal"
                }]
              ]
            ]
          ],
          [{
              "value": "FormGroup",
              "type": "identifier"
            },
            [{
              "value": "#",
              "type": "identifier"
            }],
            [
              [{
                  "value": "TextField",
                  "type": "identifier"
                },
                [{
                    "value": "#",
                    "type": "identifier"
                  }, {
                    "value": "label",
                    "type": "literal"
                  }, {
                    "value": "Minimum number of shipments",
                    "type": "literal"
                  }, {
                    "value": "value",
                    "type": "literal"
                  },
                  [{
                    "value": "get",
                    "type": "identifier"
                  }, {
                    "value": "minimumNumberOfShipments",
                    "type": "literal"
                  }], {
                    "value": "onChange",
                    "type": "literal"
                  },
                  [{
                    "value": "set",
                    "type": "identifier"
                  }, {
                    "value": "minimumNumberOfShipments",
                    "type": "literal"
                  }]
                ]
              ],
              [{
                  "value": "Select",
                  "type": "identifier"
                },
                [{
                    "value": "#",
                    "type": "identifier"
                  }, {
                    "value": "label",
                    "type": "literal"
                  }, {
                    "value": "Shipping Interval",
                    "type": "literal"
                  }, {
                    "value": "onChange",
                    "type": "literal"
                  },
                  [{
                    "value": "set",
                    "type": "identifier"
                  }, {
                    "value": "shippingInterval",
                    "type": "literal"
                  }], {
                    "value": "value",
                    "type": "literal"
                  },
                  [{
                    "value": "get",
                    "type": "identifier"
                  }, {
                    "value": "shippingInterval",
                    "type": "literal"
                  }], {
                    "value": "options",
                    "type": "literal"
                  },
                  [
                    [{
                      "value": "#",
                      "type": "identifier"
                    }, {
                      "value": "label",
                      "type": "literal"
                    }, {
                      "value": "Days",
                      "type": "literal"
                    }, {
                      "value": "value",
                      "type": "literal"
                    }, {
                      "value": "days",
                      "type": "literal"
                    }],
                    [{
                      "value": "#",
                      "type": "identifier"
                    }, {
                      "value": "label",
                      "type": "literal"
                    }, {
                      "value": "Weeks",
                      "type": "literal"
                    }, {
                      "value": "value",
                      "type": "literal"
                    }, {
                      "value": "weeks",
                      "type": "literal"
                    }],
                    [{
                      "value": "#",
                      "type": "identifier"
                    }, {
                      "value": "label",
                      "type": "literal"
                    }, {
                      "value": "Months",
                      "type": "literal"
                    }, {
                      "value": "value",
                      "type": "literal"
                    }, {
                      "value": "months",
                      "type": "literal"
                    }]
                  ]
                ]
              ]
            ]
          ]
        ], {
          "value": ";",
          "type": "identifier"
        }, {
          "value": "Empty",
          "type": "identifier"
        }, {
          "value": "else",
          "type": "identifier"
        },
        []
      ]
    ]
  ]`,
    state: `{
  "minimumNumberOfShipments": "1",
  "shippingInterval": "days",
  "subscriptionType": "",
  "availableForSubscription": false
}`,
  },
];

export default options;
