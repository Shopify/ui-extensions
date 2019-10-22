package com.shopify.resourceextensions

class List(value: kotlin.collections.List<Node>) : Node(value) {

    override fun evaluate(context: Context): Any? {
        val elements = value as kotlin.collections.List<Node>
        ((elements.first() as? Identifier)?.evaluate(context) as? Factory)?.let { factory ->
            val args = elements.subList(1, elements.size)
            return factory.build(context, args)
        }
        return null
    }

}
