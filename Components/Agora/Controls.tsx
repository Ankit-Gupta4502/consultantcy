import { IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";
import { useClient } from "./AgoraVideoCall";
import { useState } from "react"
import Button from "../UI/Button";
import { AiOutlineAudioMuted } from "react-icons/ai"
import { BiMicrophone } from "react-icons/bi"
import { BsCameraVideoOff, BsCameraVideo } from "react-icons/bs"
import { MdOutlineCallEnd } from "react-icons/md"
import { useAppSelector, useAppDispatch } from "../../hooks";
const Controls = (props: {
    tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const client = useClient();
    const { tracks, setStart } = props;
    const { AgoraReducer: { isStart } } = useAppSelector(state => state)
    const [trackState, setTrackState] = useState({ video: true, audio: true });
    const dispatch = useAppDispatch()

    const mute = async (type: "audio" | "video") => {
        if (type === "audio") {
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio };
            });
        } else if (type === "video") {
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((ps) => {
                return { ...ps, video: !ps.video };
            });
        }
    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        dispatch({ type: "LEFT_CHANNEL" })
    };

    if (!isStart) {
        return null
    }

    return (
        <div className="flex items-center space-x-10 z-30 -translate-x-1/2 absolute bottom-11 left-[50%]">
            <Button className={trackState.audio ? "on" : ""}
                onClick={() => mute("audio")}>
                {trackState.audio ? <AiOutlineAudioMuted size={24} /> : <BiMicrophone size={24} />}
            </Button>
            <Button className={trackState.video ? "on " : ""}
                onClick={() => mute("video")}>
                {trackState.video ? <BsCameraVideoOff size={24} /> : <BsCameraVideo size={24} />}
            </Button>
            <Button size="sm" className="bg-red-600" onClick={() => leaveChannel()}><MdOutlineCallEnd size={24} /></Button>
        </div>
    );
};

export default Controls