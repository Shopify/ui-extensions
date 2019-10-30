//
//  Context.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-29.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Context {
    
    func get(value: String) -> Factory? {
        switch value {
        case "#":
            return PropertiesFactory()
        case "label":
            return LabelFactory()
        default:
            return nil
        }
    }
    
}
