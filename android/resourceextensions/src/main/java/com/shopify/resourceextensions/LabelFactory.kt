package com.shopify.resourceextensions

class LabelFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        return Label(context, args)
    }

}

class Label(context: Context, args: kotlin.collections.List<Node>) {

    var caption: String? = null

    init {
        args.forEach { node ->
            (node.evaluate(context) as? Properties)?.let { properties ->
                caption = properties["caption"] as String
            }
        }
    }

}
