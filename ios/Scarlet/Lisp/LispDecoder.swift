//
//  LispDecoder.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-09.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

public class LispDecoder {
    
    var dataStore: DataStore?
    var rootSExpr: SExpr?
    
    public init(_ rootSExpr: SExpr? = nil) {
        self.rootSExpr = rootSExpr
    }
    
    public func setDataStore(_ dataStore: DataStore) {
        self.dataStore = dataStore
    }
    
    public func decode<T: Decodable>(_ decodableType: T.Type, from data: Data) throws -> T {
        rootSExpr = SExpr(stringLiteral: String(decoding: data, as: UTF8.self))
        return try T(from: self)
    }
    
    fileprivate func decode<T: Decodable>(_ type: T.Type) throws -> T {
        return try T(from: self)
    }
    
}

extension LispDecoder: Decoder {
    
    public var codingPath: [CodingKey] { return [] }
    public var userInfo: [CodingUserInfoKey : Any] { return [:] }
    
    public func container<Key>(keyedBy type: Key.Type) throws -> KeyedDecodingContainer<Key> where Key : CodingKey {
        return KeyedDecodingContainer(KeyedContainer<Key>(decoder: self, sExpr: rootSExpr!))
    }
    
    public func unkeyedContainer() throws -> UnkeyedDecodingContainer {
        return UnkeyedContainer(decoder: self, sExpr: rootSExpr!)
    }
    
    public func singleValueContainer() throws -> SingleValueDecodingContainer {
        return SingleValueContainer(decoder: self, sExpr: rootSExpr!)
    }
    
    private struct KeyedContainer<Key: CodingKey>: KeyedDecodingContainerProtocol {
        
        var decoder: LispDecoder
        var sExpr: SExpr
        var codingPath: [CodingKey] { return [] }
        var allKeys: [Key] = []
        var map: [String: SExpr] = [:]
        
        init(decoder: LispDecoder, sExpr: SExpr) {
            self.decoder = decoder
            self.sExpr = sExpr
            
            let firstSExpr = sExpr[0]
            switch firstSExpr {
            case let .Atom(value):
                if (value == "#") {
                    initAsProperties()
                } else if (value == "lambda") {
                    initAsLambda()
                } else {
                    initAsComponent(typeAtom: firstSExpr)
                }
            case .List(_):
                fatalError("Cannot generate a KeyedContainer if the first SExpr is a List type")
            }
        }
        
        private mutating func initAsComponent(typeAtom: SExpr) {
            map["type"] = typeAtom
            switch (sExpr[1]) {
            case .Atom(_):
                fatalError("Expected properties list")
            case let .List(subExprs):
                switch subExprs[0] {
                case let .Atom(value):
                    if (value == "#") {
                        map["properties"] = sExpr[1]
                    }
                default:
                    break
                }
            }
        }
        
        private mutating func initAsLambda() {
            let argSExpr = sExpr[1]
            if (argSExpr.count > 0) {
                map["arg"] = argSExpr[0]
            } else {
                map["arg"] = SExpr.Atom("")
            }
            map["action"] = sExpr[2]
        }
        
        private mutating func initAsProperties() {
            switch sExpr {
            case .Atom(_):
                fatalError("Tried to initialize properties with SExpr of type Atom")
            case let .List(subExprs):
                var i = 1
                while i < subExprs.count {
                    let key = subExprs[i].stringValue!.withoutWrappingQuotes()
                    let value = subExprs[i+1]
                    map[key] = value
                    i += 2
                }
            }
        }
        
        func contains(_ key: Key) -> Bool {
            return true
        }
        
        func decode<T: Decodable>(_ type: T.Type, forKey key: Key) throws -> T {
            return try LispDecoder(map[key.stringValue]).decode(T.self)
        }
        
        func decodeNil(forKey key: Key) throws -> Bool {
            return true
        }
        
        func nestedContainer<NestedKey>(keyedBy type: NestedKey.Type, forKey key: Key) throws -> KeyedDecodingContainer<NestedKey> where NestedKey : CodingKey {
            return try LispDecoder(map[key.stringValue]).container(keyedBy: type)
        }
        
        func nestedUnkeyedContainer(forKey key: Key) throws -> UnkeyedDecodingContainer {
            return try decoder.unkeyedContainer()
        }
        
        func superDecoder() throws -> Decoder {
            return decoder
        }
        
        func superDecoder(forKey key: Key) throws -> Decoder {
            return decoder
        }
        
    }
    
    private struct UnkeyedContainer: UnkeyedDecodingContainer {
        
        var decoder: LispDecoder
        var sExpr: SExpr
        var sExprIterator: SExprIterator
        
        var codingPath: [CodingKey] { return [] }
        var count: Int?
        var currentIndex: Int
        var isAtEnd: Bool { return currentIndex >= count! }
        
        init(decoder: LispDecoder, sExpr: SExpr) {
            self.decoder = decoder
            self.sExpr = sExpr
            self.sExprIterator = sExpr.makeIterator()
            self.count = sExpr.count
            self.currentIndex = 0
        }
        
        func decodeNil() -> Bool {
            return true
        }
        
        mutating func decode<T>(_ type: T.Type) throws -> T where T : Decodable {
            let newDecoder = LispDecoder(sExprIterator.next())
            currentIndex += 1
            return try newDecoder.decode(type)
        }
        
        func nestedContainer<NestedKey>(keyedBy type: NestedKey.Type) throws -> KeyedDecodingContainer<NestedKey> where NestedKey : CodingKey {
            return try decoder.container(keyedBy: type)
        }
        
        func nestedUnkeyedContainer() throws -> UnkeyedDecodingContainer {
            return self
        }
        
        func superDecoder() throws -> Decoder {
            return decoder
        }
        
    }
    
    private struct SingleValueContainer: SingleValueDecodingContainer {
        
        var decoder: LispDecoder
        var sExpr: SExpr
        var codingPath: [CodingKey] { return [] }
        
        init(decoder: LispDecoder, sExpr: SExpr) {
            self.decoder = decoder
            self.sExpr = sExpr
        }
        
        func decodeNil() -> Bool {
            return true
        }
        
        func decode(_ type: String.Type) throws -> String {
            switch sExpr {
            case let .Atom(value):
                return value.withoutWrappingQuotes()
            default:
                return ""
            }
        }
        
        func decode<T>(_ type: T.Type) throws -> T where T : Decodable {
            return try decoder.decode(type)
        }
        
    }
    
    private struct LispCodingKey: CodingKey {
        
        var intValue: Int?
        var stringValue: String
        
        init(stringValue: String) {
            self.stringValue = stringValue
        }
        
        init?(intValue: Int) {
            return nil
        }
        
    }
    
}
