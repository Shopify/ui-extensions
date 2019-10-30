//
//  Factory.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-29.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

protocol Factory {
    
    func build(context: Context, args: [Node]) -> Any
    
}
