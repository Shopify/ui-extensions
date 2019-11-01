//
//  ASTProcessor.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-28.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class ASTProcessor {
    
    public static func evaluate(data: Data) throws -> Any? {
        let rootNode = try JSONDecoder().decode(Node.self, from: data)
        return try rootNode.evaluate(context: Context())
    }
    
}
