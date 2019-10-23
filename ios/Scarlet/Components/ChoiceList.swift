//
//  ChoiceList.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-08.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class ChoiceList: Component {
    
    let labelType: LabelType
    public let choices: [[String: String]]
    public let onChange: Lambda
    
    enum PropertiesKeys: String, CodingKey {
        case label, choices, onChange
    }
    
    required public init(from decoder: Decoder) throws {
        let properties = try decoder.container(keyedBy: PropertiesKeys.self)
        
        labelType = try properties.decode(LabelType.self, forKey: .label)
        choices = try properties.decode([[String: String]].self, forKey: .choices)
        onChange = try properties.decode(Lambda.self, forKey: .onChange)
        
        try super.init(from: decoder)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    public var label: String? {
        return labelType.string
    }
    
    public func keyAtIndex(_ index: Int) -> String {
        return choices[index].keys.first!
    }
    
    public func valueAtIndex(_ index: Int) -> String {
        return choices[index].values.first!
    }

}
