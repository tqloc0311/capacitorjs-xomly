export interface EkycNativePlugin {
    doEkyc(params: { userId: string }): Promise<{ result: unknown }>
}
