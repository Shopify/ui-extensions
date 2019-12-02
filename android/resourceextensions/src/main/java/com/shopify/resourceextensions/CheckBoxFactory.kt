package com.shopify.resourceextensions

class CheckBoxFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        return CheckBox(context, args)
    }

}

class CheckBox (context: Context, args: kotlin.collections.List<Node>) {

    var checked: Boolean = false

    init {
        args.forEach { node ->
            (node.evaluate(context) as? Properties)?.let { properties ->
                // TODO
            }
        }
    }

}

