//
//  DataStore.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-03.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

typealias DataStoreRead = (String) -> String?

public class DataStore {

    private var dataStore = [String: String]()
    
    public init(seed: [String: String]) {
        dataStore = seed
    }
    
    public func set(_ key: String, _ value: String?) {
        dataStore[key] = value
    }
    
    public func get(_ key: String) -> String? {
        return dataStore[key]
    }
}

extension DataStore: CustomDebugStringConvertible {
    public var debugDescription: String {
        return dataStore.debugDescription
    }
}
