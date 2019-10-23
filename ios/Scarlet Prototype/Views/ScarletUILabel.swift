//
//  ScarletUILabel.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-07.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

public class ScarletUILabel: UILabel {
    
    let properties: Scarlet.Label
    
    init(with properties: Scarlet.Label) {
        self.properties = properties
        super.init(frame: .zero)
        
        text = properties.label
        translatesAutoresizingMaskIntoConstraints = false
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
