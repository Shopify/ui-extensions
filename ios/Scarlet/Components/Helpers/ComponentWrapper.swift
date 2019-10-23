//
//  ComponentWrapper.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Component: Decodable {}

extension CodingUserInfoKey {
    static let dataStore = CodingUserInfoKey(rawValue: "dataStore")!
}

extension JSONDecoder {
    public func setDataStore(_ dataStore: DataStore) {
        userInfo[.dataStore] = dataStore
    }
}

extension Decoder {
    var dataStore: DataStore {
        return userInfo[.dataStore] as! DataStore
    }
}

public class ComponentWrapper: Decodable {
        
    enum ScarletComponentTypes: String, Decodable, CodingKey {
        case label, button, textfield, checkbox, choicelist, card
    }

    public let component: Component
    
    enum RootKeys: String, CodingKey {
        case type
        case properties
    }
    
    public static func parse(decoder: JSONDecoder, data: Data) throws -> [Component] {
        return try decoder.decode([ComponentWrapper].self, from: data).map{ $0.component }
    }
    
    public static func parse(decoder: LispDecoder, data: Data) throws -> [Component] {
        return try decoder.decode([ComponentWrapper].self, from: data).map{ $0.component }
    }
    
    required public init(from decoder: Decoder) throws {
        let root = try decoder.container(keyedBy: RootKeys.self)
        let type = try root.decode(ScarletComponentTypes.self, forKey: .type)

        switch type {
        case .button: component = try root.decode(Button.self, forKey: .properties)
        case .label: component = try root.decode(Label.self, forKey: .properties)
        case .textfield: component = try root.decode(TextField.self, forKey: .properties)
        case .checkbox: component = try root.decode(Checkbox.self, forKey: .properties)
        case .choicelist: component = try root.decode(ChoiceList.self, forKey: .properties)
        case .card: component = try root.decode(Card.self, forKey: .properties)
        }
    }
}
