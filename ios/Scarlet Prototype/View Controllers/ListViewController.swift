//
//  ViewController.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-09-26.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit

class ListViewController: UITableViewController {
    
    var payloads = [URL]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        payloads = Bundle.main.urls(forResourcesWithExtension: "lisp", subdirectory: nil)!
        payloads.append(contentsOf: Bundle.main.urls(forResourcesWithExtension: "json", subdirectory: nil)!)
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
        let controller = DetailViewController(filePath: payloads[indexPath.row])
        navigationController?.pushViewController(controller, animated: true)
    }    
}
