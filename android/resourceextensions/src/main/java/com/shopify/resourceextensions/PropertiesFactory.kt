package com.shopify.resourceextensions

class PropertiesFactory : Factory {

    override fun build(context: Context, args: kotlin.collections.List<Node>): Any {
        val map = HashMap<String, Any?>()
        for (x in 0 until args.count() step 2) {
            val key = args[x].evaluate(context) as String
            val value = args[x+1].evaluate(context)
            map[key] = value
        }
        return Properties(map)
    }

}

class Properties(private val map: Map<String, Any?>) {

    operator fun get(key: String) = map[key]

}