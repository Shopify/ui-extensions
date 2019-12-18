package com.shopify.resourceextensions

import org.json.JSONArray
import org.json.JSONObject

class ASTProcessor {

    companion object {
        fun evaluate(json: String): Any? = JSONArray(json).toNodeV2()!!.evaluate(Context())
    }
}

fun JSONObject.toNode(): Node? {
    val type = optString("type")
    val value = opt("value")

    return when (type) {
        "literal" -> Literal(value)
        "identifier" -> Identifier(value as String)
        else -> null
    }
}

fun JSONArray.toNode(): Node {
    val nodes = ArrayList<Node>()
    for (i in 0 until length()) {
        get(i).let {
            when (it) {
                is JSONObject -> it.toNode()
                is JSONArray -> it.toNode()
                else -> null
            }
        }?.let {
            nodes.add(it)
        }
    }
    return List(nodes)
}

fun JSONArray.toNodeV2(): Node? {
    return get(0).let { firstElement ->
        when (firstElement) {
            "literal" -> Literal(getString(1))
            "identifier" -> Identifier(getString(1))
            "list" -> List(this.asArray().drop(1).map { (it as JSONArray).toNodeV2()!! })
            is JSONArray -> List(this.asArray().map {  (it as JSONArray).toNodeV2()!! })
            else -> null
        }
    }
}

fun JSONArray.asArray(): ArrayList<Any> {
    val result = ArrayList<Any>()
    for (i in 0 until length()) {
        result.add(get(i))
    }
    return result
}
