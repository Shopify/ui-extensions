package com.shopify.resourceextensions

class CheckBoxFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        return CheckBox()
    }

}

class CheckBox
