//
//  MainViewController.swift
//  App
//
//  Created by BIC-QuocLoc on 29/05/2025.
//

import UIKit
import Capacitor

class MainViewController: CAPBridgeViewController {

    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(EkycNativePlugin())
    }

}
