import React, { useEffect, useState } from 'react'
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, ClientConfig, IAgoraRTCRemoteUser } from "agora-rtc-react";
import VideoCall from './VideoCall';

const config: ClientConfig = {
    mode: "rtc", codec: "vp8",
}

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const appId: string = "150f0f3b5c71463aa6e004e2b7cb7673"; //ENTER APP ID HERE
export const token: string | null = "007eJxTYHhborTG73R0XGLrlceupr2XwndNnJkkx2Ab9Sxy9/xQ710KDIamBmkGacZJpsnmhiZmxomJZqkGBiapRknmyUnmZubGRcJuKQ2BjAwFzyayMjJAIIjPwlCSWlzCwAAAQmofBQ==";

const AgoraVideoCall = () => {
    const [inCall, setInCall] = useState(false);
    const [channelName, setChannelName] = useState("");
    return (
        <div>
            {
                inCall ?
                    <VideoCall channelName={channelName} setInCall={setInCall} />
                    : <div className="join">
                        <p style={{ color: 'red' }}>Please enter your Agora App ID in App.tsx and refresh the page</p>
                        <input type="text"
                            placeholder="Enter Channel Name"
                            onChange={(e) => setChannelName(e.target.value)}
                        />
                        <button onClick={(e) => {
                            setInCall(true);
                        }}>
                            Join
                        </button>
                    </div>
            }

        </div>
    )
}

export default AgoraVideoCall