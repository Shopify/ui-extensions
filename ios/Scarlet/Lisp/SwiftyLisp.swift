/**
 *  SwiftyLisp
 *
 *  Copyright (c) 2016 Umberto Raimondi. Licensed under the MIT license, as follows:
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

// https://github.com/uraimo/SwiftyLISP/blob/master/Sources/SwiftyLisp.swift

import Foundation

public enum SExpr: Collection {
    
    case Atom(String)
    case List([SExpr])
    
    public typealias Index = Int
    public typealias Element = SExpr

    public var startIndex: Index { return 0 }
    public var endIndex: Index { return count - 1 }

    public subscript(index: Index) -> Element {
        get {
            switch self {
            case .Atom(_):
                return self
            case let .List(subExprs):
                return subExprs[index]
            }
        }
    }
    
    public func index(after i: Int) -> Int {
        return i + 1
    }
    
    public func makeIterator() -> SExprIterator {
        return SExprIterator(self)
    }
    
    public var count: Int {
        switch self {
        case .Atom(_):
            return 1
        case let .List(subExprs):
            return subExprs.count
        }
    }
    
    public var stringValue: String? {
        switch self {
        case let .Atom(value):
            return value
        case .List(_):
            return nil
        }
    }
    
}

public struct SExprIterator: IteratorProtocol {
    let sExpr: SExpr
    var times = 0
    
    init(_ sExpr: SExpr) {
        self.sExpr = sExpr
    }
    
    public mutating func next() -> SExpr? {
        switch sExpr {
        case .Atom(_):
            if (times > 0) {
                return nil
            } else {
                times += 1
                return sExpr
            }
        case let .List(subExprs):
            if (times >= subExprs.count) {
                return nil
            } else {
                let subExpr = subExprs[times]
                times += 1
                return subExpr
            }
        }
    }
}

/// Extension that implements CustomStringConvertible to pretty-print the S-Expression
extension SExpr : CustomStringConvertible{
    public var description: String {
        switch self{
        case let .Atom(value):
            return "\(value) "
        case let .List(subxexprs):
            var res = "("
            for expr in subxexprs{
                res += "\(expr) "
            }
            res += ")"
            return res
        }
    }
}

/// Extension needed to convert string literals to a SExpr
extension SExpr : ExpressibleByStringLiteral,ExpressibleByUnicodeScalarLiteral,ExpressibleByExtendedGraphemeClusterLiteral {
    
    public init(stringLiteral value: String){
        self = SExpr.read(value)
    }
    
    public init(extendedGraphemeClusterLiteral value: String){
        self.init(stringLiteral: value)
    }
    
    public init(unicodeScalarLiteral value: String){
        self.init(stringLiteral: value)
    }
    
}

/// Read, Tokenize and parsing extension
extension SExpr {
    
    /**
     Read a LISP string and convert it to a hierarchical S-Expression
     */
    public static func read(_ sexpr:String) -> SExpr{
        
        enum Token{
            case pOpen,pClose,textBlock(String)
        }
        
        /**
         Break down a string to a series of tokens
         
         - Parameter sexpr: Stringified S-Expression
         - Returns: Series of tokens
         */
        func tokenize(_ sexpr:String) -> [Token] {
            var res = [Token]()
            var tmpText = ""
            
            for c in sexpr {
                switch c {
                case "(":
                    if tmpText != "" {
                        res.append(.textBlock(tmpText))
                        tmpText = ""
                    }
                    res.append(.pOpen)
                case ")":
                    if tmpText != "" {
                        res.append(.textBlock(tmpText))
                        tmpText = ""
                    }
                    res.append(.pClose)
                case " ":
                    if tmpText != "" {
                        res.append(.textBlock(tmpText))
                        tmpText = ""
                    }
                default:
                    tmpText.append(c)
                }
            }
            return res
        }
        
        func appendTo(list: SExpr?, node:SExpr) -> SExpr {
            var list = list
            
            if list != nil, case var .List(elements) = list! {
                elements.append(node)
                list = .List(elements)
            }else{
                list = node
            }
            return list!
        }
        
        /**
         Parses a series of tokens to obtain a hierachical S-Expression
         
         - Parameter tokens: Tokens to parse
         - Parameter node: Parent S-Expression if available
         
         - Returns: Tuple with remaning tokens and resulting S-Expression
         */
        func parse(_ tokens: [Token], node: SExpr? = nil) -> (remaining:[Token], subexpr:SExpr?) {
            var tokens = tokens
            var node = node
            
            var i = 0
            repeat {
                let t = tokens[i]
                
                switch t {
                case .pOpen:
                    //new sexpr
                    let (tr,n) = parse( Array(tokens[(i+1)..<tokens.count]), node: .List([]))
                    assert(n != nil) //Cannot be nil
                    
                    (tokens, i) = (tr, 0)
                    node = appendTo(list: node, node: n!)
                    
                    if tokens.count != 0 {
                        continue
                    }else{
                        break
                    }
                case .pClose:
                    //close sexpr
                    return ( Array(tokens[(i+1)..<tokens.count]), node)
                case let .textBlock(value):
                    let trimmedValue = value.trimmingCharacters(in: .whitespacesAndNewlines)
                    if (!trimmedValue.isEmpty) {
                        node = appendTo(list: node, node: .Atom(value))
                    }
                }
                
                i += 1
            }while(tokens.count > 0)
            
            return ([],node)
        }
        
        let tokens = tokenize(sexpr)
        let res = parse(tokens)
        return res.subexpr ?? .List([])
    }
}
