//
//  LabelType.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-09.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

enum LabelType: Decodable {
    
    case string(String)
    case get(Get)
    
    public var string: String? {
        switch self {
        case .string(let stringLabel):
            return stringLabel
        case .get(let getLabel):
            return getLabel.value()
        }
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let stringLabel = try? container.decode(String.self) {
            self = .string(stringLabel)
        } else if let getLabel = try? container.decode(Get.self) {
            self = .get(getLabel)
        } else {
            fatalError()
        }
    }
    
}
