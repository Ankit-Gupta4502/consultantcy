import React, { useState, useEffect } from 'react'
import { useClient, useMicrophoneAndCameraTracks, appId, token } from './AgoraVideoCall';
import { IAgoraRTCRemoteUser } from "agora-rtc-react"
import Videos from "./Videos"
import Controls from './Controls';
const VideoCall = ({ setInCall, channelName = '' }: { setInCall: React.Dispatch<React.SetStateAction<boolean>>, channelName: string }) => {
    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
    const [start, setStart] = useState<boolean>(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    useEffect(() => {
        const init = async (name: string) => {
            try {
                client.on("user-published", async (user, mediaType) => {
                    await client.subscribe(user, mediaType);
                    if (mediaType === "video") {
                        setUsers((prevUsers) => {
                            return [...prevUsers, user];
                        });
                    }
                    if (mediaType === "audio") {
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

        if (ready && tracks) {
            init(channelName);
        }

    }, [channelName, client, ready, tracks]);
    return (
        <div className="h-screen">
            {ready && tracks && (
                <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
            )}
            {start && tracks &&
                <Videos users={users} tracks={tracks} />
            }
        </div>
    )
}

export default VideoCall