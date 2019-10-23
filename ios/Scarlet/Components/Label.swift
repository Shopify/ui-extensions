//
//  Label.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-07.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Label: Component {
    
    let labelType: LabelType
    
    enum PropertiesKeys: String, CodingKey {
        case label
    }
    
    required public init(from decoder: Decoder) throws {
        let properties = try decoder.container(keyedBy: PropertiesKeys.self)
        
        labelType = try properties.decode(LabelType.self, forKey: .label)
        
        try super.init(from: decoder)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    public var label: String? {
        return labelType.string
    }
    
}
