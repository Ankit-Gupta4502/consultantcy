import React, { useState, useEffect } from 'react'
import { useClient, useMicrophoneAndCameraTracks, appId,  } from './AgoraVideoCall';
import { IAgoraRTCRemoteUser } from "agora-rtc-react"
import Videos from "./Videos"
import Controls from './Controls';
import { useAppSelector } from '../../hooks';
const VideoCall = () => {
    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
    const [start, setStart] = useState<boolean>(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    const { AgoraReducer: { token, channelName, } } = useAppSelector(state => state)
    const init = async (name: string) => {
        console.log("running video");

        try {
            client.on("user-published", async (user, type) => {

                await client.subscribe(user, type);
                if (type === "video") {
                    setUsers((prevUsers) => {
                        return [...prevUsers, user];
                    });
                }
                if (type === "audio") {
                    user.audioTrack?.play();
                }
            });

            client.on("user-unpublished", (user, type) => {
                if (type === "audio") {
                    user.audioTrack?.stop();
                }
                if (type === "video") {
                    setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid);
                    });
                }
            });

            client.on("user-left", (user) => {
                setUsers((prevUsers) => {
                    return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            await client.join(appId, name, token, null);
            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
       
            if (ready && tracks) {
                init(channelName);
            }
    }, [channelName, client, ready, tracks,]);
    return (
        <div className="h-screen fixed inset-0 z-50 overflow-hidden">
            {ready && tracks && (
                <Controls tracks={tracks} setStart={setStart} />
            )}
            {start && tracks &&
                <Videos users={users} tracks={tracks} />
            }
        </div>
    )
}

export default VideoCall