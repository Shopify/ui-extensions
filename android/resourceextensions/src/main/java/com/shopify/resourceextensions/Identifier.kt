package com.shopify.resourceextensions

class Identifier(value: String) : Node(value) {

    override fun evaluate(context: Context): Any? = context[this.value as String]

}
