//
//  EkycNativePlugin.swift
//  App
//
//  Created by BIC-QuocLoc on 29/05/2025.
//

import Capacitor

@objc(EkycNativePlugin)
public class EkycNativePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "EkycNativePlugin"
    public let jsName = "EkycNative"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "doEkyc", returnType: CAPPluginReturnPromise)
    ]

    @objc func doEkyc(_ call: CAPPluginCall) {
        let value = call.getString("userId") ?? ""
        call.resolve(["result": value])
    }
}
