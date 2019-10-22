package com.shopify.resourceextensions

abstract class Node(protected val value: Any) {

    abstract fun evaluate(context: Context): Any?

}
