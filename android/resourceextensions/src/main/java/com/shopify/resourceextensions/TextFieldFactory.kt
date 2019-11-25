package com.shopify.resourceextensions

class TextFieldFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        return TextField()
    }

}

class TextField
