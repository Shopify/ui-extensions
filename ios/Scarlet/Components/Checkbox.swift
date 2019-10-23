//
//  Checkbox.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-07.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Checkbox: Component {
    
    let labelType: LabelType
    public let onChange: Lambda
    
    enum PropertiesKeys: String, CodingKey {
        case label, onChange
    }
    
    required public init(from decoder: Decoder) throws {
        let properties = try decoder.container(keyedBy: PropertiesKeys.self)
        
        labelType = try properties.decode(LabelType.self, forKey: .label)
        onChange = try properties.decode(Lambda.self, forKey: .onChange)
        
        try super.init(from: decoder)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    public var label: String? {
        return labelType.string
    }
    
}
