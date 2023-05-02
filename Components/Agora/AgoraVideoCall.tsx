import React, { useState } from 'react'
import { createClient, createMicrophoneAndCameraTracks, ClientConfig, createMicrophoneAudioTrack } from "agora-rtc-react";
import VideoCall from './VideoCall';
import { useAppSelector } from '../../hooks';
import AudioCall from './AudioCall';
const config: ClientConfig = {
    mode: "rtc", codec: "vp8",
}

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const useAudioTrack = createMicrophoneAudioTrack()

export const appId: string = "150f0f3b5c71463aa6e004e2b7cb7673"; //ENTER APP ID HERE


const AgoraVideoCall = () => {
    const { AgoraReducer: { isStart, mediaType } } = useAppSelector(state => state)
    return isStart ?
        mediaType === "video" ? <VideoCall /> : <AudioCall />
        : <div></div>
}

export default AgoraVideoCall