//
//  ScarletView.swift
//  Scarlet Prototype
//
//  Created by David Muzi on 2019-10-03.
//  Copyright © 2019 Shopify. All rights reserved.
//

import UIKit
import Scarlet

class ScarletView: UIView {

    private let components: [Component]
    
    init(components: [Component], delegate: ScarletViewDelegate) {
        self.components = components
        
        super.init(frame: .zero)
        
        let containerView = UIView(frame: .zero)
        containerView.translatesAutoresizingMaskIntoConstraints = false
        containerView.backgroundColor = .lightGray
        containerView.layer.cornerRadius = 4.0
        
        let views = components.map{ $0.uiView(delegate: delegate) }
        let stack = UIStackView(arrangedSubviews: views)
        stack.backgroundColor = .lightGray
        stack.axis = .vertical
        stack.spacing = 6.0
        stack.addBackground(color: .lightGray)
        
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
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

extension Component: ViewConvertible {
    @objc
    func uiView(delegate: ScarletViewDelegate) -> UIView {
        fatalError("Must be implemented by subclass")
    }
}

protocol ViewConvertible {
    func uiView(delegate: ScarletViewDelegate) -> UIView
}

extension TextField {
    override func uiView(delegate: ScarletViewDelegate) -> UIView {
        return ScarletUITextField(with: self, delegate: delegate)
    }
}

extension Button {
    override func uiView(delegate: ScarletViewDelegate) -> UIView {
        return ScarletUIButton(with: self, delegate: delegate)
    }
}

extension ChoiceList {
    override func uiView(delegate: ScarletViewDelegate) -> UIView {
        return ScarletUIChoiceList(with: self, delegate: delegate)
    }
}

extension Checkbox {
    override func uiView(delegate: ScarletViewDelegate) -> UIView {
        return ScarletUISwitch(with: self, delegate: delegate)
    }
}

extension Label {
    override func uiView(delegate: ScarletViewDelegate) -> UIView {
        return ScarletUILabel(with: self)
    }
}

extension Card {
    override func uiView(delegate: ScarletViewDelegate) -> UIView {
        return ScarletUICard(with: self, delegate: delegate)
    }
}

extension UIStackView {
    func addBackground(color: UIColor) {
        let subView = UIView(frame: bounds)
        subView.backgroundColor = color
        subView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        insertSubview(subView, at: 0)
    }
}
