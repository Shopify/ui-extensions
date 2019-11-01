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
    
    func evaluate(context: Context) -> Any? {
        switch self {
        case .literal(let value):
            return value
        case .identifier(let identifier):
            return context.get(value: identifier)
        case .list(let nodes):
            switch nodes.first {
            case .identifier(_):
                let factory = nodes.first!.evaluate(context: context) as! Factory
                let args = Array(nodes.dropFirst())
                return factory.build(context: context, args: args)
            default:
                return nodes.map({ $0.evaluate(context: context) })
            }
        }
    }

}
