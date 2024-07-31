export const pixelEvents = {
  "definitions": {
    "Browser": {
      "properties": {
        "cookie": {
          "metadata": {
            "description": "This object replaces the native document.cookie API and provides a setter/getter to set cookies on the top frame."
          },
          "properties": {
            "get": {
              "metadata": {
                "description": "An asynchronous method to get a specific cookie by name. Takes a cookie name of type `string` and returns the cookie value as a `string`",
                "typescriptType": "(name?: string) => Promise<string>"
              }
            },
            "set": {
              "metadata": {
                "description": "An asynchronous method to set a cookie by name. It takes two arguments, a string of form `key=value` as [described here](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#write_a_new_cookie) or the name of the cookie as the first argument and the value as the second argument.",
                "typescriptType": "(cookieOrName: string, value?: string) => Promise<string>"
              }
            }
          }
        },
        "sendBeacon": {
          "metadata": {
            "description": "@deprecated The navigator.sendBeacon() method asynchronously sends an HTTP POST request containing a small amount of data to a web server. Please use the standard web `fetch` api with the option `keepalive: true` to achieve this functionality.",
            "typescriptType": "(url: string, body?: string) => Promise<boolean>"
          }
        },
        "localStorage": {
          "properties": {
            "length": {
              "metadata": {
                "description": "Returns an integer representing the number of data items stored in the Storage object.",
                "typescriptType": "() => Promise<WindowLocalStorage['localStorage']['length']>"
              }
            },
            "key": {
              "metadata": {
                "description": "When passed a number n, this method will return the name of the nth key in the storage.",
                "typescriptType": "(index: number) => Promise<ReturnType<WindowLocalStorage['localStorage']['key']>>"
              }
            },
            "getItem": {
              "metadata": {
                "description": "When passed a key name, will return that key's value.",
                "typescriptType": "(key: string) => Promise<ReturnType<WindowLocalStorage['localStorage']['getItem']>>"
              }
            },
            "setItem": {
              "metadata": {
                "description": "When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.",
                "typescriptType": "(key: string, value: any) => Promise<ReturnType<WindowLocalStorage['localStorage']['setItem']>>"
              }
            },
            "removeItem": {
              "metadata": {
                "description": "When passed a key name, will remove that key from the storage.",
                "typescriptType": "(key: string) => Promise<ReturnType<WindowLocalStorage['localStorage']['removeItem']>>"
              }
            },
            "clear": {
              "metadata": {
                "description": "When invoked, will empty all keys out of the storage.",
                "typescriptType": "() => Promise<ReturnType<WindowLocalStorage['localStorage']['clear']>>"
              }
            }
          }
        },
        "sessionStorage": {
          "properties": {
            "length": {
              "metadata": {
                "description": "Returns an integer representing the number of data items stored in the Storage object.",
                "typescriptType": "() => Promise<WindowSessionStorage['sessionStorage']['length']>"
              }
            },
            "key": {
              "metadata": {
                "description": "When passed a number n, this method will return the name of the nth key in the storage.",
                "typescriptType": "(index: number) => Promise<ReturnType<WindowSessionStorage['sessionStorage']['key']>>"
              }
            },
            "getItem": {
              "metadata": {
                "description": "When passed a key name, will return that key's value.",
                "typescriptType": "(key: string) => Promise<ReturnType<WindowSessionStorage['sessionStorage']['getItem']>>"
              }
            },
            "setItem": {
              "metadata": {
                "description": "When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.",
                "typescriptType": "(key: string, value: any) => Promise<ReturnType<WindowSessionStorage['sessionStorage']['setItem']>>"
              }
            },
            "removeItem": {
              "metadata": {
                "description": "When passed a key name, will remove that key from the storage.",
                "typescriptType": "(key: string) => Promise<ReturnType<WindowSessionStorage['sessionStorage']['removeItem']>>"
              }
            },
            "clear": {
              "metadata": {
                "description": "When invoked, will empty all keys out of the storage.",
                "typescriptType": "() => Promise<ReturnType<WindowSessionStorage['sessionStorage']['clear']>>"
              }
            }
          }
        }
      }
    },
    "Context": {
      "metadata": {
        "description": "A snapshot of various read-only properties of the browser at the time of event"
      },
      "properties": {
        "window": {
          "ref": "WebPixelsWindow",
          "metadata": {
            "description": "Snapshot of a subset of properties of the `window` object in the top frame of the browser"
          }
        },
        "document": {
          "ref": "WebPixelsDocument",
          "metadata": {
            "description": "Snapshot of a subset of properties of the `document` object in the top frame of the browser"
          }
        },
        "navigator": {
          "ref": "WebPixelsNavigator",
          "metadata": {
            "description": "Snapshot of a subset of properties of the `navigator` object in the top frame of the browser"
          }
        }
      }
    },
    "InitData": {
      "properties": {
        "customer": {
          "nullable": true,
          "ref": "Customer"
        },
        "cart": {
          "nullable": true,
          "ref": "Cart"
        },
        "shop": {
          "ref": "Shop"
        },
        "checkout": {
          "nullable": true,
          "ref": "Checkout"
        },
        "productVariants": {
          "nullable": true,
          "elements": {
            "ref": "ProductVariant"
          }
        }
      }
    },
    "WebPixelsWindow": {
      "metadata": {
        "description": "A snapshot of a subset of properties of the `window` object in the top frame of the browser"
      },
      "properties": {
        "innerHeight": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar"
          }
        },
        "innerWidth": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), gets the width of the content area of the browser window including, if rendered, the vertical scrollbar"
          }
        },
        "outerHeight": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), gets the height of the outside of the browser window"
          }
        },
        "outerWidth": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), gets the width of the outside of the browser window"
          }
        },
        "pageXOffset": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), an alias for window.scrollX"
          }
        },
        "pageYOffset": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), an alias for window.scrollY"
          }
        },
        "screen": {
          "ref": "Screen",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen), the interface representing a screen, usually the one on which the current window is being rendered"
          }
        },
        "screenX": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), the horizontal distance from the left border of the user's browser viewport to the left side of the screen"
          }
        },
        "screenY": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), the vertical distance from the top border of the user's browser viewport to the top side of the screen"
          }
        },
        "scrollX": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), the number of pixels that the document has already been scrolled horizontally"
          }
        },
        "scrollY": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), the number of pixels that the document has already been scrolled vertically"
          }
        },
        "origin": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), the global object's origin, serialized as a string"
          }
        },
        "location": {
          "ref": "Location",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window), the location, or current URL, of the window object"
          }
        }
      }
    },
    "Location": {
      "metadata": {
        "description": "A snapshot of a subset of properties of the `location` object in the top frame of the browser"
      },
      "properties": {
        "href": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing the entire URL"
          }
        },
        "protocol": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing the protocol scheme of the URL, including the final `':'`"
          }
        },
        "host": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing the host, that is the hostname, a `':'`, and the port of the URL"
          }
        },
        "hostname": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing the domain of the URL"
          }
        },
        "port": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing the port number of the URL"
          }
        },
        "pathname": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing an initial `'/'` followed by the path of the URL, not including the query string or fragment"
          }
        },
        "search": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing a `'?'` followed by the parameters or \"querystring\" of the URL"
          }
        },
        "hash": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing a `'#'` followed by the fragment identifier of the URL"
          }
        },
        "origin": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location), a string containing the canonical form of the origin of the specific location"
          }
        }
      }
    },
    "Screen": {
      "metadata": {
        "description": "The interface representing a screen, usually the one on which the current window is being rendered"
      },
      "properties": {
        "height": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen/height), the height of the screen"
          }
        },
        "width": {
          "type": "uint32",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen/width), the width of the screen"
          }
        }
      }
    },
    "WebPixelsDocument": {
      "metadata": {
        "description": "A snapshot of a subset of properties of the `document` object in the top frame of the browser"
      },
      "properties": {
        "characterSet": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document), returns the character set being used by the document"
          }
        },
        "location": {
          "ref": "Location",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document), returns the URI of the current document"
          }
        },
        "referrer": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document), returns the URI of the page that linked to this page"
          }
        },
        "title": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document), returns the title of the current document"
          }
        }
      }
    },
    "WebPixelsNavigator": {
      "metadata": {
        "description": "A snapshot of a subset of properties of the `navigator` object in the top frame of the browser"
      },
      "properties": {
        "cookieEnabled": {
          "type": "boolean",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator), returns `false` if setting a cookie will be ignored and true otherwise"
          }
        },
        "language": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator), returns a string representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown"
          }
        },
        "languages": {
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator), returns an array of strings representing the languages known to the user, by order of preference",
            "typescriptType": "ReadonlyArray<string>"
          }
        },
        "userAgent": {
          "type": "string",
          "metadata": {
            "description": "Per [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator), returns the user agent string for the current browser"
          }
        }
      }
    },
    "EventType": {
      "enum": [
        "standard",
        "dom",
        "custom",
        "error"
      ]
    },
    "Id": {
      "type": "string",
      "metadata": {
        "description": "The ID of the customer event"
      }
    },
    "ClientId": {
      "type": "string",
      "metadata": {
        "description": "The client-side ID of the customer, provided by Shopify"
      }
    },
    "Name": {
      "type": "string",
      "metadata": {
        "description": "The name of the customer event"
      }
    },
    "Timestamp": {
      "type": "string",
      "metadata": {
        "description": "The timestamp of when the customer event occurred, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format"
      }
    },
    "Data": {
      "metadata": {
        "description": "A free-form object representing data specific to this event provided by Shopify. Refer to [standard events](#standard-events) for details on the payload available to each event",
        "typescriptType": "Record<string, unknown>",
        "sorbetType": "T::Hash[String, T.untyped]"
      }
    },
    "Attribute": {
      "metadata": {
        "description": "Custom attributes associated with the cart or checkout."
      },
      "properties": {
        "key": {
          "type": "string",
          "metadata": {
            "description": "The key for the attribute."
          }
        },
        "value": {
          "type": "string",
          "metadata": {
            "description": "The value for the attribute."
          }
        }
      }
    },
    "Delivery": {
      "metadata": {
        "description": "The delivery information for the event."
      },
      "properties": {
        "selectedDeliveryOptions": {
          "metadata": {
            "typescriptType": "DeliveryOption[]",
            "description": "The selected delivery options for the event."
          },
          "elements": {
            "ref": "DeliveryOption"
          }
        }
      }
    },
    "DeliveryOption": {
      "metadata": {
        "description": "Represents a delivery option that the customer can choose from."
      },
      "properties": {
        "type": {
          "type": "string",
          "metadata": {
            "description": "The type of delivery option.\n\n- `pickup`\n- `pickupPoint`\n- `shipping`\n- `local`"
          }
        },
        "cost": {
          "nullable": true,
          "ref": "MoneyV2",
          "metadata": {
            "description": "The cost of the delivery option."
          }
        },
        "costAfterDiscounts": {
          "nullable": true,
          "ref": "MoneyV2",
          "metadata": {
            "description": "The cost of the delivery option after discounts have been applied."
          }
        },
        "handle": {
          "type": "string",
          "metadata": {
            "description": "The unique identifier of the delivery option."
          }
        },
        "title": {
          "nullable": true,
          "type": "string",
          "metadata": {
            "description": "The title of the delivery option."
          }
        },
        "description": {
          "nullable": true,
          "type": "string",
          "metadata": {
            "description": "The description of the delivery option."
          }
        }
      }
    },
    "Checkout": {
      "metadata": {
        "description": "A container for all the information required to add items to checkout and pay."
      },
      "properties": {
        "attributes": {
          "metadata": {
            "description": "A list of attributes accumulated throughout the checkout process."
          },
          "elements": {
            "ref": "Attribute"
          }
        },
        "billingAddress": {
          "ref": "MailingAddress",
          "nullable": true,
          "metadata": {
            "description": "The billing address to where the order will be charged."
          }
        },
        "buyerAcceptsEmailMarketing": {
          "type": "boolean",
          "metadata": {
            "description": "Indicates whether the customer has consented to be sent marketing material via email. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "buyerAcceptsSmsMarketing": {
          "type": "boolean",
          "metadata": {
            "description": "Indicates whether the customer has consented to be sent marketing material via SMS. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "currencyCode": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The three-letter code that represents the currency, for example, USD. Supported codes include standard ISO 4217 codes, legacy codes, and non-standard codes."
          }
        },
        "localization": {
          "ref": "Localization",
          "metadata": {
            "description": "Information about the active localized experience. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "discountApplications": {
          "metadata": {
            "description": "A list of discount applications."
          },
          "elements": {
            "ref": "DiscountApplication"
          }
        },
        "email": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The email attached to this checkout."
          }
        },
        "lineItems": {
          "metadata": {
            "description": "A list of line item objects, each one containing information about an item in the checkout."
          },
          "elements": {
            "ref": "CheckoutLineItem"
          }
        },
        "order": {
          "ref": "Order",
          "metadata": {
            "description": "The resulting order from a paid checkout."
          }
        },
        "phone": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A unique phone number for the customer. Formatted using E.164 standard. For example, *+16135551111*."
          }
        },
        "smsMarketingPhone": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The phone number provided by the buyer after opting in to SMS marketing. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "delivery": {
          "nullable": true,
          "metadata": {
            "description": "Represents the selected delivery options for a checkout. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          },
          "ref": "Delivery"
        },
        "discountsAmount": {
          "nullable": true,
          "ref": "MoneyV2",
          "metadata": {
            "description": "The total amount of the discounts applied to the price of the checkout. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "shippingAddress": {
          "ref": "MailingAddress",
          "nullable": true,
          "metadata": {
            "description": "The shipping address to where the line items will be shipped."
          }
        },
        "shippingLine": {
          "ref": "ShippingRate",
          "nullable": true,
          "metadata": {
            "description": "Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object."
          }
        },
        "subtotalPrice": {
          "ref": "MoneyV2",
          "nullable": true,
          "metadata": {
            "description": "The price at checkout before duties, shipping, and taxes."
          }
        },
        "token": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A unique identifier for a particular checkout."
          }
        },
        "totalPrice": {
          "ref": "MoneyV2",
          "nullable": true,
          "metadata": {
            "description": "The sum of all the prices of all the items in the checkout, including duties, taxes, and discounts."
          }
        },
        "totalTax": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The sum of all the taxes applied to the line items and shipping lines in the checkout."
          }
        },
        "transactions": {
          "metadata": {
            "description": "A list of transactions associated with a checkout or order. Certain transactions, such as credit card transactions, may only be present in the checkout_completed event."
          },
          "elements": {
            "ref": "Transaction"
          }
        }
      }
    },
    "CheckoutLineItem": {
      "metadata": {
        "description": "A single line item in the checkout, grouped by variant and attributes."
      },
      "properties": {
        "discountAllocations": {
          "metadata": {
            "description": "The discounts that have been applied to the checkout line item by a discount application."
          },
          "elements": {
            "ref": "DiscountAllocation"
          }
        },
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "quantity": {
          "type": "uint32",
          "metadata": {
            "description": "The quantity of the line item."
          }
        },
        "title": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The title of the line item. Defaults to the product's title."
          }
        },
        "variant": {
          "ref": "ProductVariant",
          "nullable": true,
          "metadata": {
            "description": "Product variant of the line item."
          }
        },
        "finalLinePrice": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The combined price of all of the items in the line item after line-level discounts have been applied. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "sellingPlanAllocation": {
          "ref": "SellingPlanAllocation",
          "nullable": true,
          "metadata": {
            "description": "The selling plan associated with the line item and the effect that each selling plan has on variants when they're purchased. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          }
        },
        "properties": {
          "metadata": {
            "description": "The properties of the line item. A shop may add, or enable customers to add custom information to a line item. Line item properties consist of a key and value pair. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          },
          "elements": {
            "ref": "Property"
          }
        }
      }
    },
    "DiscountAllocation": {
      "metadata": {
        "description": "The discount that has been applied to the checkout line item."
      },
      "properties": {
        "amount": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The monetary value with currency allocated to the discount."
          }
        },
        "discountApplication": {
          "ref": "DiscountApplication",
          "metadata": {
            "description": "The information about the intent of the discount."
          }
        }
      }
    },
    "DiscountApplication": {
      "metadata": {
        "description": "The information about the intent of the discount."
      },
      "properties": {
        "allocationMethod": {
          "type": "string",
          "metadata": {
            "description": "The method by which the discount's value is applied to its entitled items.\n\n- `ACROSS`: The value is spread across all entitled lines.\n- `EACH`: The value is applied onto every entitled line.\n",
            "enum": [
              "ACROSS",
              "EACH"
            ]
          }
        },
        "targetSelection": {
          "type": "string",
          "metadata": {
            "description": "How the discount amount is distributed on the discounted lines.\n\n- `ALL`: The discount is allocated onto all the lines.\n- `ENTITLED`: The discount is allocated onto only the lines that it's entitled for.\n- `EXPLICIT`: The discount is allocated onto explicitly chosen lines.\n",
            "enum": [
              "ALL",
              "ENTITLED",
              "EXPLICIT"
            ]
          }
        },
        "targetType": {
          "type": "string",
          "metadata": {
            "description": "The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.\n\n- `LINE_ITEM`: The discount applies onto line items.\n- `SHIPPING_LINE`: The discount applies onto shipping lines.\n",
            "enum": [
              "LINE_ITEM",
              "SHIPPING_LINE"
            ]
          }
        },
        "title": {
          "type": "string",
          "metadata": {
            "description": "The customer-facing name of the discount. If the type of discount is a `DISCOUNT_CODE`, this `title` attribute represents the code of the discount."
          }
        },
        "type": {
          "type": "string",
          "metadata": {
            "description": "The type of the discount.\n\n- `AUTOMATIC`: A discount automatically at checkout or in the cart without the need for a code.\n- `DISCOUNT_CODE`: A discount applied onto checkouts through the use of a code.\n- `MANUAL`: A discount that is applied to an order by a merchant or store owner manually, rather than being automatically applied by the system or through a script.\n- `SCRIPT`: A discount applied to a customer's order using a script\n",
            "enum": [
              "AUTOMATIC",
              "DISCOUNT_CODE",
              "MANUAL",
              "SCRIPT"
            ]
          }
        },
        "value": {
          "type": "string",
          "metadata": {
            "sorbetType": "T.any(MoneyV2, PricingPercentageValue)",
            "typescriptType": "MoneyV2 | PricingPercentageValue",
            "objectRefs": "MoneyV2,PricingPercentageValue",
            "description": "The value of the discount. Fixed discounts return a `Money` Object, while Percentage discounts return a `PricingPercentageValue` object."
          }
        }
      }
    },
    "SellingPlanAllocation": {
      "metadata": {
        "description": "Represents an association between a variant and a selling plan."
      },
      "properties": {
        "sellingPlan": {
          "ref": "SellingPlan",
          "metadata": {
            "description": "A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'."
          }
        }
      }
    },
    "SellingPlan": {
      "metadata": {
        "description": "Represents how products and variants can be sold and purchased."
      },
      "properties": {
        "id": {
          "type": "string",
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'."
          }
        }
      }
    },
    "ProductVariant": {
      "metadata": {
        "description": "A product variant represents a different version of a product, such as differing sizes or differing colors."
      },
      "properties": {
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "image": {
          "ref": "Image",
          "nullable": true,
          "metadata": {
            "description": "Image associated with the product variant. This field falls back to the product image if no image is available."
          }
        },
        "price": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The product variant’s price."
          }
        },
        "product": {
          "ref": "Product",
          "metadata": {
            "description": "The product object that the product variant belongs to."
          }
        },
        "sku": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The SKU (stock keeping unit) associated with the variant."
          }
        },
        "title": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The product variant’s title."
          }
        },
        "untranslatedTitle": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The product variant’s untranslated title."
          }
        }
      }
    },
    "Property": {
      "metadata": {
        "description": "The line item additional custom properties."
      },
      "properties": {
        "key": {
          "type": "string",
          "metadata": {
            "description": "The key for the property."
          }
        },
        "value": {
          "type": "string",
          "metadata": {
            "description": "The value for the property."
          }
        }
      }
    },
    "Image": {
      "metadata": {
        "description": "An image resource."
      },
      "properties": {
        "src": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The location of the image as a URL."
          }
        }
      }
    },
    "MoneyV2": {
      "metadata": {
        "description": "A monetary value with currency."
      },
      "properties": {
        "amount": {
          "type": "float64",
          "metadata": {
            "description": "The decimal money amount."
          }
        },
        "currencyCode": {
          "type": "string",
          "metadata": {
            "description": "The three-letter code that represents the currency, for example, USD. Supported codes include standard ISO 4217 codes, legacy codes, and non-standard codes."
          }
        }
      }
    },
    "Localization": {
      "metadata": {
        "description": "Information about the active localized experience."
      },
      "properties": {
        "country": {
          "ref": "Country",
          "metadata": {
            "description": "The country of the active localized experience."
          }
        },
        "language": {
          "ref": "Language",
          "metadata": {
            "description": "The language of the active localized experience."
          }
        },
        "market": {
          "ref": "Market",
          "metadata": {
            "description": "The market including the country of the active localized experience."
          }
        }
      }
    },
    "Country": {
      "metadata": {
        "description": "A country."
      },
      "properties": {
        "isoCode": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The ISO-3166-1 code for this country, for example, \"US\"."
          }
        }
      }
    },
    "Language": {
      "metadata": {
        "description": "A language."
      },
      "properties": {
        "isoCode": {
          "type": "string",
          "metadata": {
            "description": "The BCP-47 language tag. It may contain a dash followed by an ISO 3166-1 alpha-2 region code, for example, \"en-US\"."
          }
        }
      }
    },
    "Market": {
      "metadata": {
        "description": "A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [this](https://shopify.dev/docs/apps/markets) conceptual overview."
      },
      "properties": {
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "handle": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A human-readable, shop-scoped identifier."
          }
        }
      }
    },
    "Product": {
      "metadata": {
        "description": "A product is an individual item for sale in a Shopify store."
      },
      "properties": {
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The ID of the product."
          }
        },
        "title": {
          "type": "string",
          "metadata": {
            "description": "The product’s title."
          }
        },
        "untranslatedTitle": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The product’s untranslated title."
          }
        },
        "url": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The relative URL of the product."
          }
        },
        "vendor": {
          "type": "string",
          "metadata": {
            "description": "The product’s vendor name."
          }
        },
        "type": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The [product type](https://help.shopify.com/en/manual/products/details/product-type) specified by the merchant."
          }
        }
      }
    },
    "Order": {
      "metadata": {
        "description": "An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process."
      },
      "properties": {
        "customer": {
          "ref": "OrderCustomer",
          "metadata": {
            "description": "The customer that placed the order."
          }
        },
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The ID of the order. ID will be null for all events except checkout_completed."
          }
        }
      }
    },
    "MailingAddress": {
      "metadata": {
        "description": "A mailing address for customers and shipping."
      },
      "properties": {
        "address1": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The first line of the address. This is usually the street address or a P.O. Box number."
          }
        },
        "address2": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The second line of the address. This is usually an apartment, suite, or unit number."
          }
        },
        "city": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The name of the city, district, village, or town."
          }
        },
        "country": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The name of the country."
          }
        },
        "countryCode": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The two-letter code that represents the country, for example, US.\nThe country codes generally follows ISO 3166-1 alpha-2 guidelines.\n"
          }
        },
        "firstName": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The customer’s first name."
          }
        },
        "lastName": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The customer’s last name."
          }
        },
        "phone": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The phone number for this mailing address as entered by the customer."
          }
        },
        "province": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The region of the address, such as the province, state, or district."
          }
        },
        "provinceCode": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The two-letter code for the region.\nFor example, ON.\n"
          }
        },
        "zip": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The ZIP or postal code of the address."
          }
        }
      }
    },
    "ShippingRate": {
      "metadata": {
        "description": "A shipping rate to be applied to a checkout."
      },
      "properties": {
        "price": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "Price of this shipping rate."
          }
        }
      }
    },
    "Cart": {
      "metadata": {
        "description": "A cart represents the merchandise that a customer intends to purchase, and the estimated cost associated with the cart."
      },
      "properties": {
        "cost": {
          "ref": "CartCost",
          "metadata": {
            "description": "The estimated costs that the customer will pay at checkout."
          }
        },
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "lines": {
          "elements": {
            "ref": "CartLine"
          },
          "metadata": {
            "description": "A list of lines containing information about the items the customer intends to purchase."
          }
        },
        "totalQuantity": {
          "type": "uint32",
          "metadata": {
            "description": "The total number of items in the cart."
          }
        },
        "attributes": {
          "metadata": {
            "description": "The attributes associated with the cart. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade)."
          },
          "elements": {
            "ref": "Attribute"
          }
        }
      }
    },
    "CartCost": {
      "metadata": {
        "description": "The costs that the customer will pay at checkout. It uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing#create-a-cart).\n"
      },
      "properties": {
        "totalAmount": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The total amount for the customer to pay."
          }
        }
      }
    },
    "CartLine": {
      "metadata": {
        "description": "Information about the merchandise in the cart."
      },
      "properties": {
        "cost": {
          "ref": "CartLineCost",
          "metadata": {
            "description": "The cost of the merchandise that the customer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout."
          }
        },
        "merchandise": {
          "ref": "ProductVariant",
          "metadata": {
            "description": "The merchandise that the buyer intends to purchase."
          }
        },
        "quantity": {
          "type": "uint32",
          "metadata": {
            "description": "The quantity of the merchandise that the customer intends to purchase."
          }
        }
      }
    },
    "CartLineCost": {
      "metadata": {
        "description": "The cost of the merchandise line that the customer will pay at checkout."
      },
      "properties": {
        "totalAmount": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The total cost of the merchandise line."
          }
        }
      }
    },
    "OrderCustomer": {
      "metadata": {
        "description": "The customer that placed the order."
      },
      "properties": {
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The ID of the customer."
          }
        }
      }
    },
    "Customer": {
      "metadata": {
        "description": "A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout."
      },
      "properties": {
        "email": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The customer’s email address."
          }
        },
        "firstName": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The customer’s first name."
          }
        },
        "id": {
          "type": "string",
          "metadata": {
            "description": "The ID of the customer."
          }
        },
        "lastName": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The customer’s last name."
          }
        },
        "ordersCount": {
          "type": "uint32",
          "nullable": true,
          "metadata": {
            "description": "The total number of orders that the customer has placed."
          }
        },
        "phone": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The customer’s phone number."
          }
        }
      }
    },
    "Collection": {
      "metadata": {
        "description": "A collection is a group of products that a shop owner can create to organize them or make their shops easier to browse."
      },
      "properties": {
        "id": {
          "type": "string",
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "title": {
          "type": "string",
          "metadata": {
            "description": "The collection’s name. Maximum length: 255 characters."
          }
        },
        "productVariants": {
          "elements": {
            "ref": "ProductVariant",
            "metadata": {
              "description": "A list of products in the collection. The first product variant for each product is returned."
            }
          }
        }
      }
    },
    "PricingPercentageValue": {
      "metadata": {
        "description": "A value given to a customer when a discount is applied to an order. The application of a discount with this value gives the customer the specified percentage off a specified item."
      },
      "properties": {
        "percentage": {
          "type": "float64",
          "metadata": {
            "description": "The percentage value of the object."
          }
        }
      }
    },
    "SearchResult": {
      "metadata": {
        "description": "An object that contains the metadata of when a search has been performed."
      },
      "properties": {
        "query": {
          "type": "string",
          "metadata": {
            "description": "The search query that was executed"
          }
        },
        "productVariants": {
          "elements": {
            "ref": "ProductVariant",
            "metadata": {
              "description": "A list of products returned by the search query. The first product variant for each product is returned"
            }
          }
        }
      }
    },
    "Transaction": {
      "metadata": {
        "description": "A transaction associated with a checkout or order."
      },
      "properties": {
        "amount": {
          "ref": "MoneyV2",
          "metadata": {
            "description": "The monetary value with currency allocated to the transaction method."
          }
        },
        "gateway": {
          "type": "string",
          "metadata": {
            "description": "The name of the payment provider used for the transaction."
          }
        },
        "paymentMethod": {
          "metadata": {
            "description": "The payment method used for the transaction. This property is only available if the shop has [upgraded to Checkout Extensibility](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade).",
            "exclude_from_ruby_schema": true
          },
          "properties": {
            "type": {
              "type": "string",
              "metadata": {
                "description": "The type of payment method used for the transaction.\n\n- `creditCard`: A vaulted or manually entered credit card.\n- `redeemable`: A redeemable payment method, such as a gift card or store credit.\n- `deferred`: A [deferred payment](https://help.shopify.com/en/manual/orders/deferred-payments), such as invoicing the buyer and collecing payment later.\n- `local`: A [local payment method](https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods) specific to the current region or market.\n- `manualPayment`: A manual payment method, such as an in-person retail transaction.\n- `paymentOnDelivery`: A payment that will be collected on delivery.\n- `wallet`: An integrated wallet, such as PayPal, Google Pay, Apple Pay, etc.\n- `offsite`: A payment processed outside of Shopify's checkout, excluding integrated wallets.\n- `customOnSite`: A custom payment method that is processed through a checkout extension with a payments app.\n- `other`: Another type of payment not defined here.\n",
                "enum": [
                  "creditCard",
                  "redeemable",
                  "deferred",
                  "local",
                  "manualPayment",
                  "paymentOnDelivery",
                  "wallet",
                  "offsite",
                  "customOnSite",
                  "other"
                ]
              }
            },
            "name": {
              "type": "string",
              "metadata": {
                "description": "The name of the payment method used for the transaction. This may further specify the payment method used."
              }
            }
          }
        }
      }
    },
    "Shop": {
      "metadata": {
        "description": "The shop represents information about the store, such as the store name and currency."
      },
      "properties": {
        "name": {
          "type": "string",
          "metadata": {
            "description": "The shop’s name."
          }
        },
        "paymentSettings": {
          "metadata": {
            "description": "Settings related to payments."
          },
          "properties": {
            "currencyCode": {
              "type": "string",
              "metadata": {
                "description": "The three-letter code for the shop’s primary currency."
              }
            }
          }
        },
        "myshopifyDomain": {
          "type": "string",
          "metadata": {
            "description": "The shop’s myshopify.com domain."
          }
        },
        "storefrontUrl": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The shop’s primary storefront URL."
          }
        },
        "countryCode": {
          "type": "string",
          "metadata": {
            "description": "The shop’s country code."
          }
        }
      }
    },
    "InputElement": {
      "metadata": {
        "description": "An object that contains data about an input element type"
      },
      "properties": {
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The id attribute of an element"
          }
        },
        "name": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The name attribute of an element"
          }
        },
        "tagName": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A string representation of the tag of an element"
          }
        },
        "type": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The type attribute of an element. Often relevant for an input or button element."
          }
        },
        "value": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The value attribute of an element. Often relevant for an input element."
          }
        }
      }
    },
    "FormElement": {
      "metadata": {
        "description": "An object that contains data about a form element type"
      },
      "properties": {
        "action": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The action attribute of a form element"
          }
        },
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The id attribute of an element"
          }
        },
        "elements": {
          "elements": {
            "ref": "InputElement"
          }
        }
      }
    },
    "GenericElement": {
      "metadata": {
        "description": "An object that contains data about a generic element type"
      },
      "properties": {
        "href": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The href attribute of an element"
          }
        },
        "id": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The id attribute of an element"
          }
        },
        "name": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The name attribute of an element"
          }
        },
        "tagName": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "A string representation of the tag of an element"
          }
        },
        "type": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The type attribute of an element. Often relevant for an input or button element."
          }
        },
        "value": {
          "type": "string",
          "nullable": true,
          "metadata": {
            "description": "The value attribute of an element. Often relevant for an input element."
          }
        }
      }
    },
    "MouseEventData": {
      "metadata": {
        "description": "An object that contains data about a mouse event"
      },
      "properties": {
        "element": {
          "ref": "GenericElement"
        },
        "screenX": {
          "type": "int32"
        },
        "screenY": {
          "type": "int32"
        },
        "pageX": {
          "type": "int32"
        },
        "pageY": {
          "type": "int32"
        },
        "offsetX": {
          "type": "int32"
        },
        "offsetY": {
          "type": "int32"
        },
        "movementX": {
          "type": "int32"
        },
        "movementY": {
          "type": "int32"
        }
      }
    },
    "CustomData": {
      "metadata": {
        "description": "A free-form object representing data specific to a custom event provided by the custom event publisher",
        "typescriptType": "Record<string, unknown>"
      }
    },
    "CustomEvent": {
      "metadata": {
        "description": "This event represents any custom events emitted by partners or merchants via the `publish` method"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Custom"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "Arbitrary name of the custom event"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "customData": {
          "nullable": true,
          "ref": "CustomData"
        }
      }
    }
  },
  "properties": {
    "checkout_address_info_submitted": {
      "metadata": {
        "description": "The `checkout_address_info_submitted` event logs an instance of a customer submitting their mailing address. This event is only available in checkouts where Checkout Extensibility for customizations is enabled",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'checkout_address_info_submitted'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "checkout": {
              "ref": "Checkout"
            }
          }
        }
      }
    },
    "checkout_completed": {
      "metadata": {
        "description": "The `checkout_completed` event logs when a visitor completes a purchase. This event is available on the **Order status** and checkout pages",
        "server_event_supported": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'checkout_completed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "checkout": {
              "ref": "Checkout"
            }
          }
        }
      }
    },
    "checkout_started": {
      "metadata": {
        "description": "The `checkout_started` event logs an instance of a customer starting the checkout process. This event is available on the checkout page. For Checkout Extensibility, this event is triggered every time a customer enters checkout. For non-checkout extensible shops, this event is only triggered the first time a customer enters checkout."
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'checkout_started'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "checkout": {
              "ref": "Checkout"
            }
          }
        }
      }
    },
    "payment_info_submitted": {
      "metadata": {
        "description": "The `payment_info_submitted` event logs an instance of a customer submitting their payment information. This event is available on the checkout page",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'payment_info_submitted'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "checkout": {
              "ref": "Checkout"
            }
          }
        }
      }
    },
    "collection_viewed": {
      "metadata": {
        "description": "The `collection_viewed` event logs an instance where a customer visited a product collection index page. This event is available on the online store page"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'collection_viewed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "collection": {
              "ref": "Collection"
            }
          }
        }
      }
    },
    "checkout_contact_info_submitted": {
      "metadata": {
        "description": "The `checkout_contact_info_submitted` event logs an instance where a customer submits a checkout form. This event is only available in checkouts where Checkout Extensibility for customizations is enabled",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'checkout_contact_info_submitted'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "checkout": {
              "ref": "Checkout"
            }
          }
        }
      }
    },
    "page_viewed": {
      "metadata": {
        "description": "The `page_viewed` event logs an instance where a customer visited a page. This event is available on the online store, checkout, and **Order status** pages"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'page_viewed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {}
        }
      }
    },
    "product_added_to_cart": {
      "metadata": {
        "description": "The `product_added_to_cart` event logs an instance where a customer adds a product to their cart. This event is available on the online store page",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'product_added_to_cart'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "cartLine": {
              "nullable": true,
              "ref": "CartLine"
            }
          }
        }
      }
    },
    "product_removed_from_cart": {
      "metadata": {
        "description": "The `product_removed_from_cart` event logs an instance where a customer removes a product from their cart. This event is available on the online store page",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'product_removed_from_cart'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "cartLine": {
              "nullable": true,
              "ref": "CartLine"
            }
          }
        }
      }
    },
    "product_viewed": {
      "metadata": {
        "description": "The `product_viewed` event logs an instance where a customer visited a product details page. This event is available on the product page"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'product_viewed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "productVariant": {
              "ref": "ProductVariant"
            }
          }
        }
      }
    },
    "product_variant_viewed": {
      "metadata": {
        "description": "The `product_variant_viewed` event logs an instance where a customer interacts with the product page and views a different variant than the initial `product_viewed` impression. This event is available on the Product page",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'product_variant_viewed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "productVariant": {
              "ref": "ProductVariant"
            }
          }
        }
      }
    },
    "search_submitted": {
      "metadata": {
        "description": "The `search_submitted` event logs an instance where a customer performed a search on the storefront. This event is available on the online store page"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'search_submitted'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "searchResult": {
              "ref": "SearchResult"
            }
          }
        }
      }
    },
    "cart_viewed": {
      "metadata": {
        "description": "The `cart_viewed` event logs an instance where a customer visited the cart page"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'cart_viewed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "cart": {
              "nullable": true,
              "ref": "Cart"
            }
          }
        }
      }
    },
    "checkout_shipping_info_submitted": {
      "metadata": {
        "description": "The `checkout_shipping_info_submitted` event logs an instance where the customer chooses a shipping rate. This event is only available in checkouts where Checkout Extensibility for customizations is enabled",
        "exclude_from_ruby_schema": true
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Standard"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'checkout_shipping_info_submitted'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "context": {
          "ref": "Context"
        },
        "data": {
          "properties": {
            "checkout": {
              "ref": "Checkout"
            }
          }
        }
      }
    },
    "input_changed": {
      "metadata": {
        "description": "The `input_changed` event logs an instance where an input, textarea, or select element on the page has changed"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Dom"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'input_changed'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "data": {
          "properties": {
            "element": {
              "ref": "InputElement"
            }
          }
        }
      }
    },
    "input_blurred": {
      "metadata": {
        "description": "The `input_blurred` event logs an instance where an input, textarea, or select element on the page has lost focus"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Dom"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'input_blurred'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "data": {
          "properties": {
            "element": {
              "ref": "InputElement"
            }
          }
        }
      }
    },
    "input_focused": {
      "metadata": {
        "description": "The `input_focused` event logs an instance where an input, textarea, or select element on the page has received focus"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Dom"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'input_focused'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "data": {
          "properties": {
            "element": {
              "ref": "InputElement"
            }
          }
        }
      }
    },
    "form_submitted": {
      "metadata": {
        "description": "The `form_submitted` event logs an instance where a form element on the page has been submitted"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Dom"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'form_submitted'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "data": {
          "properties": {
            "element": {
              "ref": "FormElement"
            }
          }
        }
      }
    },
    "clicked": {
      "metadata": {
        "description": "The `clicked` event logs an instance where any element on the page has been clicked"
      },
      "properties": {
        "id": {
          "ref": "Id"
        },
        "clientId": {
          "ref": "ClientId"
        },
        "type": {
          "type": "string",
          "metadata": {
            "typescriptType": "EventType.Dom"
          }
        },
        "name": {
          "type": "string",
          "metadata": {
            "description": "The name of the customer event",
            "typescriptType": "'clicked'"
          }
        },
        "timestamp": {
          "ref": "Timestamp"
        },
        "data": {
          "ref": "MouseEventData"
        }
      }
    }
  }
};
