package com.shopify.resourceextensions

class Context {

    operator fun get(value: String): Factory? {
        return when (value) {
            "#" -> PropertiesFactory()
            "label" -> LabelFactory()
            else -> null
        }
    }

}