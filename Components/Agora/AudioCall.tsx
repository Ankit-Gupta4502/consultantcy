import React, { useEffect, useState } from 'react'
import AgoraRTC from "agora-rtc-sdk-ng"
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';
import Button from '../UI/Button';
import { MdOutlineCallEnd } from "react-icons/md"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { BiMicrophone } from 'react-icons/bi';
import avatar from "../../public/images/profile_pic.png"
const AudioCall = () => {
    const { AgoraReducer: { channelName, token
    } } = useAppSelector(state => state)
    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([])
    const [channelParameters, setChannelParameters] = useState({
        localAudioTrack: null,
        remoteAudioTrack: null,
        remoteUid: null,
    })
    const [mute, setMute] = useState(true)
    const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    const dispatch = useAppDispatch()




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
            setUsers((prevUsers) => {
                return [...prevUsers, user];
            });
            setChannelParameters(prev => ({ ...prev, remoteUid: user.uid, remoteAudioTrack: user.audioTrack }))
            user.audioTrack.play();
            agoraEngine.on("user-unpublished", user => {
                console.log(user.uid + "has left the channel");
            });
        });
        await agoraEngine.join(options.appId, channelName, token, options.uid);
        const localTrack = await AgoraRTC.createMicrophoneAudioTrack();
        if (localTrack) {
            setChannelParameters(prev => ({ ...prev, localAudioTrack: localTrack }))
            console.log("working");
        }
        await agoraEngine.publish(localTrack);
    }
    const leave = async () => {
        if (channelParameters.remoteAudioTrack) {
            channelParameters.remoteAudioTrack.stop();
        }
        await agoraEngine.leave();
        dispatch({ type: "LEFT_CHANNEL" })
    }

    const toggleMute = () => {
        channelParameters.localAudioTrack.setEnabled(!mute)
        setMute(prev => !prev)
    }

    useEffect(() => {
        if (channelName && token) {
            init()
        }
    }, [channelName, token])


    return (
        <div className='h-full bg-primary fixed inset-0 min-h-[500px] z-50 grid place-content-center ' >
            <div>
                <img src={avatar.src} className='mx-auto w-96 h-96 rounded-full ' alt="" />
                <div className="flex items-center space-x-10 z-30 -translate-x-1/2 absolute bottom-11 left-[50%]">
                    <Button
                        onClick={toggleMute}   >
                        {
                            mute ?
                                <BiMicrophone size={24} />
                                :
                                <AiOutlineAudioMuted size={24} />
                        }
                    </Button>

                    <Button size="sm" className="bg-red-600" onClick={leave}><MdOutlineCallEnd size={24} /></Button>
                </div>
            </div>
            {
                users.length > 1 ?
                    users.map((item) => {
                        return <div key={item.uid} className='absolute bottom-0 right-0 w-96 aspect-square ' >
                            <img src={avatar.src} className='mx-auto w-36 h-36 rounded-full ' alt="" />
                        </div>
                    }) : ""
            }
        </div>
    )
}

export default AudioCall