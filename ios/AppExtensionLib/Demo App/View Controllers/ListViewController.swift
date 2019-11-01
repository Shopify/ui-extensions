//
//  LiveViewController.swift
//  Demo App
//
//  Created by Dave Pelletier on 2019-10-28.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import AppExtensionLib

class ListViewController: UITableViewController {
    
    var payloads = [URL]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        payloads = Bundle.main.urls(forResourcesWithExtension: "json", subdirectory: nil)!
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return payloads.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell(style: .default, reuseIdentifier: nil)
        cell.textLabel?.text = payloads[indexPath.row].lastPathComponent
        
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let json = try! Data(contentsOf: payloads[indexPath.row])
        let components = try! ASTProcessor.evaluate(data: json)
        print(components)
    }
}
