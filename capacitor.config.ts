import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
    appId: "com.loctq.xomly_capacitor",
    appName: "xomly",
    webDir: "dist",
    server: {
        url: "http://10.20.50.103:5173",
        cleartext: true,
    },
}

export default config
