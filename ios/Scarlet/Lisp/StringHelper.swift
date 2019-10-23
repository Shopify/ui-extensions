//
//  StringHelper.swift
//  Scarlet
//
//  Created by Dave Pelletier on 2019-10-11.
//  Copyright © 2019 Shopify. All rights reserved.
//

import Foundation

extension String {
    func withoutWrappingQuotes() -> String {
        let hasStartingQuote = self.first == "\""
        let hasEndingQuote = self.last == "\""
        let range = index(startIndex, offsetBy: hasStartingQuote ? 1 : 0)..<index(endIndex, offsetBy: hasEndingQuote ? -1 : 0)
        return String(self[range])
    }
}
