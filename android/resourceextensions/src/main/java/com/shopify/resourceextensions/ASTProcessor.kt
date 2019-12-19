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
    val type = get(0) as String
    val value = get(1)
    return when (type) {
        "literal" -> Literal(value as String)
        "identifier" -> Identifier(value as String)
        "list" -> {
            val listNodes = (value as JSONArray).asArray().map { (it as JSONArray).toNodeV2()!! }
            List(listNodes)
        }
        else -> null
    }
}

fun JSONArray.asArray(): ArrayList<Any> {
    val result = ArrayList<Any>()
    for (i in 0 until length()) {
        result.add(get(i))
    }
    return result
}
