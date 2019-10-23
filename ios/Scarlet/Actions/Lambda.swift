//
//  Lambda.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation


public struct Lambda: Decodable {
    
    public enum ActionType {
        case alert(Alert)
        case set(Set)
    }

    let arg: String
    public let type: ActionType
    
    enum RootKeys: String, CodingKey {
        case arg, action
    }
    
    enum ActionKeys: String, CodingKey {
        case type
    }
    
    public init(from decoder: Decoder) throws {
        let root = try decoder.container(keyedBy: RootKeys.self)
        let actionContainer = try root.nestedContainer(keyedBy: ActionKeys.self, forKey: .action)
        let actionType = try actionContainer.decode(String.self, forKey: .type)
        
        arg = try root.decode(String.self, forKey: .arg)
        
        switch actionType {
        case "alert":
            let action = try root.decode(Alert.self, forKey: .action)
            type = .alert(action)
        case "set":
            let action = try root.decode(Set.self, forKey: .action)
            type = .set(action)
        default: fatalError()
        }
    }
    
    public func injectArgumentValue(value: String?) {
        guard let value = value else { return }
        switch type {
        case .alert(let alert):
            alert.injectArgumentValue(argToken: arg, argValue: value)
        case .set(let set):
            set.injectArgumentValue(argToken: arg, argValue: value)
        }
    }
    
}
