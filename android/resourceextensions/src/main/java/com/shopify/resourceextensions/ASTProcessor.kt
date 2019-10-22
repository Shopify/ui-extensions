package com.shopify.resourceextensions

import org.json.JSONArray
import org.json.JSONObject

class ASTProcessor {

    fun evaluate(json: String): Any? = JSONArray(json).toNode().evaluate(Context())

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
