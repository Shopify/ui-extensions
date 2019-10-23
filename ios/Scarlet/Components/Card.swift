//
//  Card.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-09.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Card: Component {
    
    let labelType: LabelType
    public let children: [Component]
    
    enum PropertiesKeys: String, CodingKey {
        case label, children
    }
    
    required public init(from decoder: Decoder) throws {
        let properties = try decoder.container(keyedBy: PropertiesKeys.self)
        
        labelType = try properties.decode(LabelType.self, forKey: .label)
        children = try properties.decode([ComponentWrapper].self, forKey: .children).map({ $0.component })
        
        try super.init(from: decoder)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    public var label: String? {
        return labelType.string
    }
    
}

