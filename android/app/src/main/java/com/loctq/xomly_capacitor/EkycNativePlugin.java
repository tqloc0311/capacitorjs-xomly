package com.loctq.capacitor_ekyc;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.JSObject;
import android.util.Log;

@CapacitorPlugin(name = "EkycNative")
public class EkycNativePlugin extends Plugin {
    @PluginMethod
    public void doEkyc(PluginCall call) {
        JSObject ret = new JSObject();
        call.resolve(ret);
    }
}