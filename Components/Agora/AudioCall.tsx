import React, { useEffect, useState } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';
import Button from '../UI/Button';
import { MdOutlineCallEnd } from "react-icons/md"
import { AiOutlineAudioMuted } from "react-icons/ai"
const AudioCall = () => {
    const { AgoraReducer: { channelName, token
    } } = useAppSelector(state => state)
    const [users, setUsers] = useState<IAgoraRTCRemoteUser | {}>({})
    const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    const dispatch = useAppDispatch()

    let channelParameters =
    {
        localAudioTrack: null,
        remoteAudioTrack: null,
        remoteUid: null,
    };


    let options =
    {
        appId: '150f0f3b5c71463aa6e004e2b7cb7673',
        channel: channelName,
        token: token,
        uid: 0,
    };

    const init = async () => {
        agoraEngine.on("user-published", async (user, mediaType) => {
            await agoraEngine.subscribe(user, mediaType);
            setUsers(user)
            if (mediaType == "audio") {
                channelParameters.remoteUid = user.uid;
                channelParameters.remoteAudioTrack = user.audioTrack;
                channelParameters.remoteAudioTrack.play();
            }
            agoraEngine.on("user-unpublished", user => {
                console.log(user.uid + "has left the channel");
            });
        });
        await agoraEngine.join(options.appId, channelName, token, options.uid);
        channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        await agoraEngine.publish(channelParameters.localAudioTrack);
    }
    const leave = async () => {
        channelParameters.localAudioTrack.close();
        await agoraEngine.leave();
        dispatch({ type: "LEFT_CHANNEL" })
    }



    useEffect(() => {
        if (channelName && token) {

            init()
        }
    }, [channelName, token])


    return (
        <div className='h-full bg-primary fixed inset-0 min-h-[500px] z-50 grid place-content-center ' >

            <img src="" className='mx-auto w-96 h-96 rounded-full ' alt="" />

            <div className="flex items-center space-x-10 z-30 -translate-x-1/2 absolute bottom-11 left-[50%]">
                <Button
                >
                    <AiOutlineAudioMuted size={24} />
                </Button>

                <Button size="sm" className="bg-red-600" onClick={leave}><MdOutlineCallEnd size={24} /></Button>
            </div>
        </div>
    )
}

export default AudioCall