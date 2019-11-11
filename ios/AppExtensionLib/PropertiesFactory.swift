//
//  PropertiesFactory.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

class PropertiesFactory : Factory {
    
    func build(context: Context, args: [Any?]) -> Any {
        var map = [String: Any]()
        for i in stride(from: 0, to: args.count, by: 2) {
            let key = args[i] as! String
            let value = args[i+1]
            map[key] = value
        }
        return map
    }
    
}
