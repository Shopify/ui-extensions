//
//  ScarletViewController.swift
//  Scarlet Prototype
//
//  Created by David Muzi on 2019-10-07.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

@objc
protocol ScarletViewDelegate: class {
    func buttonTapped(_ button: ScarletUIButton)
    func textFieldDidChange(_ textField: ScarletUITextField)
    func checkboxDidChange(_ checkbox: ScarletUISwitch)
    func choiceListDidChange(_ choiceList: ScarletUIChoiceList)
}

class ScarletViewController: UIViewController, ScarletViewDelegate {
    
    var dataStore: DataStore
    let components: [Component]
    
    init(filePath: URL, dataStore: DataStore) {
        self.dataStore = dataStore
        
        let start = DispatchTime.now()
        
        self.components = filePath.parse(dataStore: dataStore)
        
        let end = DispatchTime.now()
        let durationMs = Double(end.uptimeNanoseconds - start.uptimeNanoseconds) / 1_000_000
        print("Parsing and interpreting time: \(durationMs) ms")

        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override func loadView() {
        view = ScarletView(components: components, delegate: self)
        view.translatesAutoresizingMaskIntoConstraints = false
    }
    
    func showAlert(alert: Alert) {
        let action = UIAlertController(title: alert.message, message: nil, preferredStyle: .alert)
        action.addAction(UIAlertAction(title: "Cancel", style: .default, handler: nil))
        present(action, animated: true, completion: nil)
    }

    func buttonTapped(_ button: ScarletUIButton) {
        handleAction(action: button.properties.onClick.type)
    }
    
    func textFieldDidChange(_ textField: ScarletUITextField) {
        textField.properties.onChange.injectArgumentValue(value: textField.text)
        handleAction(action: textField.properties.onChange.type)
    }
    
    func checkboxDidChange(_ checkbox: ScarletUISwitch) {
        checkbox.properties.onChange.injectArgumentValue(value: checkbox.isOn ? "true" : "false")
        handleAction(action: checkbox.properties.onChange.type)
    }
    
    func choiceListDidChange(_ choiceList: ScarletUIChoiceList) {
        choiceList.properties.onChange.injectArgumentValue(value: String(choiceList.selectedKey()))
        handleAction(action: choiceList.properties.onChange.type)
    }
    
    func handleAction(action: Lambda.ActionType) {
        switch action {
        case .alert(let alert):
            showAlert(alert: alert)
        case .set(let set):
            dataStore.set(set.key, set.value)
        }
    }
}

extension URL {
   func parse(dataStore: DataStore) -> [Component] {
       switch pathExtension {
       case "lisp":
           let decoder = LispDecoder()
           decoder.setDataStore(dataStore)
           return try! ComponentWrapper.parse(decoder: decoder, data: Data(contentsOf: self))
       case "json":
           let decoder = JSONDecoder()
           decoder.setDataStore(dataStore)
           return try! ComponentWrapper.parse(decoder: decoder, data: Data(contentsOf: self))
           default: fatalError("Unknown extension: \(pathExtension)")
       }
   }
}
