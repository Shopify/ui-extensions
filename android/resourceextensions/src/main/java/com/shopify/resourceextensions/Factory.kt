package com.shopify.resourceextensions

interface Factory {

    fun build(context: Context, args: kotlin.collections.List<Node>): Any

}
