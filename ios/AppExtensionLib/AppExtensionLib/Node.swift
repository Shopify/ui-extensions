//
//  Node.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-28.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

enum Node : Decodable {
    
    case literal(Any)
    case identifier(String)
    case list([Node])
    
    enum JsonKeys: String, CodingKey {
        case type
        case value
    }
    
    init(from decoder: Decoder) throws {
        do {
            let root = try decoder.container(keyedBy: JsonKeys.self)
            let type = try root.decode(String.self, forKey: .type)
            switch type {
            case "literal":
                // TODO need to handle other literal types (use enum with literal types)
                self = .literal(try root.decode(String.self, forKey: .value))
            case "identifier":
                self = .identifier(try root.decode(String.self, forKey: .value))
            default:
                throw AppExtensionError.invalidNodeType(type: type)
            }
        } catch {
            self = .list(try decoder.singleValueContainer().decode([Node].self))
        }
    }
    
    func evaluate(context: Context) throws -> Any? {
        switch self {
        case .literal(let value):
            return value
        case .identifier(let identifier):
            return try context.get(identifier: identifier)
        case .list(let nodes):
            switch nodes.first {
            case .identifier(_):
                let factory = try nodes.first!.evaluate(context: context) as! Factory
                let args = try Array(nodes.dropFirst()).map({ try $0.evaluate(context: context) })
                return factory.build(context: context, args: args)
            default:
                return try nodes.map({ try $0.evaluate(context: context) })
            }
        }
    }

}
