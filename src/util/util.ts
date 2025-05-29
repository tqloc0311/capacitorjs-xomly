import {
    AndroidSettings,
    IOSSettings,
    NativeSettings,
} from "capacitor-native-settings"

const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const openAppSettings = () => {
    NativeSettings.open({
        optionAndroid: AndroidSettings.ApplicationDetails,
        optionIOS: IOSSettings.App,
    })
}

export { delay, openAppSettings }
