export interface Istate {
    loading: boolean,
    errors: any | {},
    isStart: boolean,
    token: string,
    channelName: string,
    mediaType: "audio" | "video"
}