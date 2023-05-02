import { AgoraVideoPlayer, IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";
const Videos = ({ users, tracks }: { users: IAgoraRTCRemoteUser[], tracks: [IMicrophoneAudioTrack, ICameraVideoTrack] }) => {


  return (

    <div id="videos " className="h-full min-h-[500px] " >
      <AgoraVideoPlayer videoTrack={tracks[1]} style={{ height: '100%', width: '100%' }} />
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <AgoraVideoPlayer className="absolute bottom-0 right-0 w-96 aspect-square " videoTrack={user.videoTrack} key={user.uid} />
            );
          } else return null;
        })}
    </div>
  );
};

export default Videos