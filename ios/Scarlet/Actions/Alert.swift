//
//  Alert.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-30.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class Alert: Decodable, AcceptsLambdaArgument {
    
    enum MessageType {
        case string(String)
        case get(Get)
    }
    
    let messageType: MessageType
    var messageWithInjectedToken: String? = nil
    
    enum RootKeys: String, CodingKey {
        case properties
    }
    
    enum PropertiesKeys: String, CodingKey {
        case message
    }
    
    required public init(from decoder: Decoder) throws {
        let root = try decoder.container(keyedBy: RootKeys.self)
        let properties = try root.nestedContainer(keyedBy: PropertiesKeys.self, forKey: .properties)
        
        if let stringMessage = try? properties.decode(String.self, forKey: .message) {
            messageType = .string(stringMessage)
            messageWithInjectedToken = stringMessage
        } else if let getMessage = try? properties.decode(Get.self, forKey: .message) {
            messageType = .get(getMessage)
        } else {
            fatalError()
        }
    }
    
    public var message: String {
        get {
            switch messageType {
            case .string(_):
                return messageWithInjectedToken!
            case .get(let getMessage):
                return getMessage.value()!
            }
        }
    }
    
    public func injectArgumentValue(argToken: String, argValue: String) {
        switch messageType {
        case .string(let stringMessage):
            messageWithInjectedToken = stringMessage.replacingOccurrences(of: argToken, with: argValue)
            return
        case .get(_):
            return
        }
    }
    
}
