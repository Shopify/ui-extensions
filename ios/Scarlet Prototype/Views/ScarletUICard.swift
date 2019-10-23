//
//  ScarletUICard.swift
//  Scarlet Prototype
//
//  Created by Dave Pelletier on 2019-10-09.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

public class ScarletUICard: UIView {
    
    let properties: Card
    
    init(with properties: Card, delegate: ScarletViewDelegate) {
        self.properties = properties
        super.init(frame: .zero)
        
        let containerView = UIView(frame: .zero)
        containerView.translatesAutoresizingMaskIntoConstraints = false
        containerView.backgroundColor = .lightGray
        containerView.layer.cornerRadius = 4.0
        
        var views = [UIView]()
        if (properties.label != nil) {
            let label = UILabel(frame: .zero)
            label.text = properties.label
            label.translatesAutoresizingMaskIntoConstraints = false
            views.append(label)
        }
        properties.children.map{ $0.uiView(delegate: delegate) }.forEach({ (view) in
            views.append(view)
        })
        
        let stack = UIStackView(arrangedSubviews: views)
        stack.backgroundColor = .gray
        stack.axis = .vertical
        stack.spacing = 6.0
        stack.addBackground(color: .gray)
        
        containerView.addSubview(stack)
        stack.translatesAutoresizingMaskIntoConstraints = false
        addSubview(containerView)

        NSLayoutConstraint.activate([
            containerView.topAnchor.constraint(equalTo: safeAreaLayoutGuide.topAnchor),
            containerView.bottomAnchor.constraint(equalTo: safeAreaLayoutGuide.bottomAnchor),
            containerView.leadingAnchor.constraint(equalTo: safeAreaLayoutGuide.leadingAnchor),
            containerView.trailingAnchor.constraint(equalTo: safeAreaLayoutGuide.trailingAnchor),
            
            stack.topAnchor.constraint(equalTo: containerView.layoutMarginsGuide.topAnchor),
            stack.bottomAnchor.constraint(equalTo: containerView.layoutMarginsGuide.bottomAnchor),
            stack.leadingAnchor.constraint(equalTo: containerView.layoutMarginsGuide.leadingAnchor),
            stack.trailingAnchor.constraint(equalTo: containerView.layoutMarginsGuide.trailingAnchor),
        ])
        
        translatesAutoresizingMaskIntoConstraints = false
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
