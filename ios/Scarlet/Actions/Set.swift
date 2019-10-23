//
//  Set.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Set: Decodable, AcceptsLambdaArgument {
    
    public let key: String
    public var value: String
    let valueWithToken: String
    
    enum RootKeys: String, CodingKey {
        case key, value
    }
    
    required public init(from decoder: Decoder) throws {
        let root = try decoder.container(keyedBy: RootKeys.self)
        key = try root.decode(String.self, forKey: .key)
        valueWithToken = try root.decode(String.self, forKey: .value)
        value = valueWithToken
    }
    
    public func injectArgumentValue(argToken: String, argValue: String) {
        value = valueWithToken.replacingOccurrences(of: argToken, with: argValue)
    }
    
}
