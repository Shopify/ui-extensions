package com.shopify.resourceextensions

class Context {

    operator fun get(value: String): Any? {
        return when (value) {
            "#" -> PropertiesFactory()
            "label" -> LabelFactory()
            else -> null
        }
    }

}