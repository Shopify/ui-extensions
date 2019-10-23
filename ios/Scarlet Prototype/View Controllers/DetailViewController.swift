//
//  DetailViewController.swift
//  Scarlet Prototype
//
//  Created by David Muzi on 2019-10-03.
//  Copyright © 2019 Shopify. All rights reserved.
//

/**
 During pairing:
 Allow ScarletAlert.message to support each of the following cases:
 1. Plain string
 2. "get" object
 3. lambda with argument
 */

import UIKit
import Scarlet

class DetailViewController: UIViewController {
    
    let filePath: URL
    var dataStore = DataStore(seed: [
        "dynamic_button": "WOOT",
        "dynamic_label": "Dynamic"
    ])
    
    init(filePath: URL) {
        self.filePath = filePath
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = filePath.lastPathComponent
        view.backgroundColor = .white
                
        let scarletViewController = ScarletViewController(filePath: filePath, dataStore: dataStore)
        addChild(scarletViewController)
        
        let dataStoreButton = UIButton(frame: .zero)
        dataStoreButton.translatesAutoresizingMaskIntoConstraints = false
        dataStoreButton.setTitle("Data Store", for: .normal)
        dataStoreButton.backgroundColor = .gray
        dataStoreButton.layer.cornerRadius = 4.0
        dataStoreButton.addTarget(self, action: #selector(showDataStore), for: .touchUpInside)

        let stack = UIStackView(arrangedSubviews: [scarletViewController.view, dataStoreButton])
        stack.axis = .vertical
        stack.spacing = 40.0
        stack.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stack)

        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 6.0),
            stack.widthAnchor.constraint(equalToConstant: 200.0),
            stack.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        ])
    }
    
    @objc
    func showDataStore() {
        print(dataStore)
    }

}
