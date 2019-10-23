package com.shopify.resourceextensions

class ButtonFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        return Button(context, args)
    }

}

class Button(context: Context, args: kotlin.collections.List<Node>) {

    var text: String? = null

    init {
        args.forEach { node ->
            (node.evaluate(context) as? Properties)?.let { properties ->
                text = properties["label"] as String
            }
        }
    }

}
