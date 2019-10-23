//
//  ScarletUIButton.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-04.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

public class ScarletUIButton: UIButton {
    
    let properties: Scarlet.Button
    
    init(with properties: Scarlet.Button, delegate: ScarletViewDelegate) {
        self.properties = properties
        super.init(frame: .zero)
        
        translatesAutoresizingMaskIntoConstraints = false
        setTitle(properties.label, for: .normal)
        backgroundColor = .blue
        layer.cornerRadius = 4.0
        
        addTarget(delegate, action: #selector(delegate.buttonTapped), for: .touchUpInside)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
