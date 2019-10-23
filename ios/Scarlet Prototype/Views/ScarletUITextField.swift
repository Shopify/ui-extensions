//
//  ScarletUITextField.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-04.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

public class ScarletUITextField: UIView {
    
    let label: UILabel
    let textField: UITextField
    let properties: Scarlet.TextField
    let delegate: ScarletViewDelegate

    init(with properties: Scarlet.TextField, delegate: ScarletViewDelegate) {
        self.properties = properties
        self.delegate = delegate
        label = UILabel(frame: .zero)
        textField = UITextField(frame: .zero)
        
        super.init(frame: .zero)
        
        label.text = properties.label
        label.translatesAutoresizingMaskIntoConstraints = false
        
        textField.addTarget(self, action: #selector(textFieldDidChange), for: .editingChanged)
        textField.translatesAutoresizingMaskIntoConstraints = false
        textField.backgroundColor = .white
        
        translatesAutoresizingMaskIntoConstraints = false
        backgroundColor = UIColor.lightGray
        
        let stack = UIStackView(arrangedSubviews: [label, textField])
        stack.translatesAutoresizingMaskIntoConstraints = false
        stack.backgroundColor = .lightGray
        stack.axis = .vertical
        stack.spacing = 6.0
        
        addSubview(stack)

        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: layoutMarginsGuide.topAnchor),
            stack.bottomAnchor.constraint(equalTo: layoutMarginsGuide.bottomAnchor),
            stack.leadingAnchor.constraint(equalTo: layoutMarginsGuide.leadingAnchor),
            stack.trailingAnchor.constraint(equalTo: layoutMarginsGuide.trailingAnchor),
        ])
    }
    
    @objc
    func textFieldDidChange() {
        delegate.textFieldDidChange(self)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    var text: String? {
        return textField.text
    }

}
