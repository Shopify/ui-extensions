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
        "custom"
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
        "typescriptType": "Record<string, unknown>"
      }
    },
    "Attribute": {
      "metadata": {
        "description": "Custom attributes left by the customer to the merchant, either in their cart or during checkout."
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
    "Checkout": {
      "metadata": {
        "description": "A container for all the information required to add items to checkout and pay."
      },
      "properties": {
        "acceptsEmailMarketing": {
          "type": "boolean",
          "metadata": {
            "description": "Whether the customer has consented to receive email marketing."
          }
        },
        "acceptsSmsMarketing": {
          "type": "boolean",
          "metadata": {
            "description": "Whether the customer has consented to receive sms marketing."
          }
        },
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
        "currencyCode": {
          "type": "string",
          "metadata": {
            "description": "The three-letter code that represents the currency, for example, USD. Supported codes include standard ISO 4217 codes, legacy codes, and non-standard codes."
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
          "nullable": true,
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
          "metadata": {
            "description": "The price at checkout before duties, shipping, and taxes."
          }
        },
        "token": {
          "type": "string",
          "metadata": {
            "description": "A unique identifier for a particular checkout."
          }
        },
        "totalPrice": {
          "ref": "MoneyV2",
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
            "description": "A list of transactions associated with a checkout or order."
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
            "typescriptType": "MoneyV2 | PricingPercentageValue",
            "description": "The value of the discount. Fixed discounts return a `Money` Object, while Percentage discounts return a `PricingPercentageValue` object."
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
          "metadata": {
            "description": "The product variant’s title."
          }
        },
        "untranslatedTitle": {
          "type": "string",
          "metadata": {
            "description": "The product variant’s untranslated title."
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
    "Product": {
      "metadata": {
        "description": "A product is an individual item for sale in a Shopify store."
      },
      "properties": {
        "id": {
          "type": "string",
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
          "metadata": {
            "description": "The product’s untranslated title."
          }
        },
        "url": {
          "type": "string",
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
          "nullable": true,
          "metadata": {
            "description": "The customer that placed the order."
          }
        },
        "id": {
          "type": "string",
          "metadata": {
            "description": "The ID of the order."
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
          "metadata": {
            "description": "A globally unique identifier."
          }
        },
        "lines": {
          "elements": {
            "ref": "CartLine",
            "metadata": {
              "description": "A list of lines containing information about the items the customer intends to purchase."
            }
          }
        },
        "totalQuantity": {
          "type": "uint32",
          "metadata": {
            "description": "The total number of items in the cart."
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
        "description": "The `checkout_address_info_submitted` event logs an instance of a customer submitting their mailing address. This event is only available in checkouts where Checkout Extensibility for customizations is enabled"
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
        "description": "The `checkout_completed` event logs when a visitor completes a purchase. This event is available on the **Order status** and checkout pages"
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
        "description": "The `payment_info_submitted` event logs an instance of a customer submitting their payment information. This event is available on the checkout page"
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
        "description": "The `checkout_contact_info_submitted` event logs an instance where a customer submits a checkout form. This event is only available in checkouts where Checkout Extensibility for customizations is enabled"
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
        "description": "The `product_added_to_cart` event logs an instance where a customer adds a product to their cart. This event is available on the online store page"
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
        "description": "The `product_removed_from_cart` event logs an instance where a customer removes a product from their cart. This event is available on the online store page"
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
        "description": "The `product_variant_viewed` event logs an instance where a customer interacts with the product page and views a different variant than the initial `product_viewed` impression. This event is available on the Product page"
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
        "description": "The `checkout_shipping_info_submitted` event logs an instance where the customer chooses a shipping rate. This event is only available in checkouts where Checkout Extensibility for customizations is enabled"
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
          "properties": {
            "element": {
              "ref": "GenericElement"
            }
          }
        }
      }
    }
  }
};
