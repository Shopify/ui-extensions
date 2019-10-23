//
//  ScarletUICheckbox.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-07.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

public class ScarletUISwitch: UISwitch {
    
    let properties: Scarlet.Checkbox
    
    init(with properties: Scarlet.Checkbox, delegate: ScarletViewDelegate) {
        self.properties = properties
        super.init(frame: .zero)
        
        translatesAutoresizingMaskIntoConstraints = false
        // TODO use properties.label
        
        addTarget(delegate, action: #selector(delegate.checkboxDidChange), for: .valueChanged)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
