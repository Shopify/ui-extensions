//
//  Get.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

struct Get: Decodable {
    
    let key: String
    let dataStoreGetFunction: DataStoreRead
    
    enum RootKeys: String, CodingKey {
        case key
    }
    
    init(from decoder: Decoder) throws {
        let root = try decoder.container(keyedBy: RootKeys.self)
        key = try root.decode(String.self, forKey: .key)
        dataStoreGetFunction = decoder.dataStore.get
    }
    
    func value() -> String? {
        return dataStoreGetFunction(key)
    }
    
}
