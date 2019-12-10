package com.shopify.resourceextensions

class CheckBoxFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        return CheckBox(context, args)
    }

}

class CheckBox(context: Context, args: kotlin.collections.List<Node>) {

    var label: String? = null

    init {
        args.forEach { node ->
            (node.evaluate(context) as? Properties)?.let { properties ->
                label = properties["label"] as String
            }
        }
    }

}
