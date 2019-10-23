//
//  ScarletUIChoiceList.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-08.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

public class ScarletUIChoiceList: UIPickerView, UIPickerViewDelegate, UIPickerViewDataSource {
    
    let properties: Scarlet.ChoiceList
    let viewDelegate: ScarletViewDelegate
    var selectedRow: Int
    
    init(with properties: Scarlet.ChoiceList, delegate: ScarletViewDelegate) {
        self.properties = properties
        self.viewDelegate = delegate
        self.selectedRow = 0
        super.init(frame: .zero)
        
        self.delegate = self
        self.dataSource = self
        
        translatesAutoresizingMaskIntoConstraints = false
        // TODO use properties.label
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func selectedKey() -> String {
        return properties.keyAtIndex(selectedRow)
    }
    
    public func numberOfComponents(in pickerView: UIPickerView) -> Int {
        1
    }
    
    public func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return properties.choices.count
    }
    
    public func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return properties.valueAtIndex(row)
    }
    
    public func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        selectedRow = row
        viewDelegate.choiceListDidChange(self)
    }
    
}
