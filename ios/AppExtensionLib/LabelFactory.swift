//
//  LabelFactory.swift
//  AppExtensionLib
//
//  Created by Dave Pelletier on 2019-10-29.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

class LabelFactory : Factory {
    
    func build(context: Context, args: [Any?]) -> Any {
        var caption = ""
        args.forEach { (arg) in
            caption = (arg as? [String: Any])?["caption"] as? String ?? caption
        }
        return Label(caption)
    }
    
}

class Label {
    
    let caption: String
    
    init(_ caption: String) {
        self.caption = caption
    }
    
}
