//
//  AcceptsLambdaArgument.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public protocol AcceptsLambdaArgument {
    
    func injectArgumentValue(argToken: String, argValue: String)
    
}
