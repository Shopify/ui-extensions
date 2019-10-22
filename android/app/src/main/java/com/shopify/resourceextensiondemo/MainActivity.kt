package com.shopify.resourceextensiondemo

import android.app.AlertDialog
import android.os.Bundle
import android.text.SpannableStringBuilder
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.shopify.resourceextensions.ASTProcessor
import kotlinx.android.synthetic.main.activity_main.*
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStreamReader
import kotlinx.android.synthetic.main.activity_main.code as codeEditText
import kotlinx.android.synthetic.main.activity_main.container as containerView
import kotlinx.android.synthetic.main.activity_main.datastore as dataStoreButton
import kotlinx.android.synthetic.main.activity_main.json_picker as jsonPicker

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val examplesLabels = arrayOf("Label")
        val examplesScripts = arrayOf("json/label.json")
        jsonPicker.setOnClickListener {
            AlertDialog.Builder(this)
                .setTitle("Examples")
                .setItems(examplesLabels) { dialog, which ->
                    codeEditText.text =
                        SpannableStringBuilder(jsonFromAssets(examplesScripts[which]))
                    dialog.dismiss()
                }
                .setNegativeButton("Cancel") { dialog, _ -> dialog.cancel() }
                .create().show()
        }

        renderer.setOnClickListener {
            containerView.removeAllViews()
            val json = codeEditText.text.toString()
            val ast = ASTProcessor().evaluate(json)
            Log.d("AST", ast.toString())
        }

        dataStoreButton.setOnClickListener {
//            val alertDialog = AlertDialog.Builder(this@MainActivity).create()
//            alertDialog.setTitle("Alert")
//            alertDialog.setMessage(dataStore.toString())
//            alertDialog.setButton(
//                AlertDialog.BUTTON_NEUTRAL,
//                "OK"
//            ) { dialog, _ -> dialog.dismiss() }
//            alertDialog.show()
        }

        codeEditText.text = SpannableStringBuilder(jsonFromAssets(examplesScripts[0]))
    }

    fun jsonFromAssets(fileName: String): String {
        val js = StringBuilder()
        try {
            val jsReader = BufferedReader(InputStreamReader(resources.assets.open(fileName)))
            var line: String? = jsReader.readLine()
            while (line != null) {
                js.appendln(line)
                line = jsReader.readLine()
            }
        } catch (e: IOException) {
            Log.e("ResourceExtensionDemo", "Could not load json from file.", e)
        }
        return js.toString()
    }

}
