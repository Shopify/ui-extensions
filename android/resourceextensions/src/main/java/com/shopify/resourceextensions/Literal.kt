package com.shopify.resourceextensions

class Literal(value: Any) : Node(value) {

    override fun evaluate(context: Context): Any = value

}
