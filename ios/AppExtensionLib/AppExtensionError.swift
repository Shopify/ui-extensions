//
//  AppExtensionError.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-11-01.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

enum AppExtensionError: Error {
    
    case invalidNodeType(type: String)
    case invalidIdentifier(identifier: String)
    
}
