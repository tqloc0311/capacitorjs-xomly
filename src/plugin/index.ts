import { registerPlugin } from "@capacitor/core";
import type { EkycNativePlugin } from "./definitions";

const EkycNative = registerPlugin<EkycNativePlugin>("EkycNative");

export * from "./definitions";
export { EkycNative };
