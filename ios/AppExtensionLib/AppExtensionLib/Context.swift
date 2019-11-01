//
//  Context.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-29.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Context {
    
    func get(identifier: String) throws -> Factory? {
        switch identifier {
        case "#":
            return PropertiesFactory()
        case "label":
            return LabelFactory()
        default:
            throw AppExtensionError.invalidIdentifier(identifier: identifier)
        }
    }
    
}
