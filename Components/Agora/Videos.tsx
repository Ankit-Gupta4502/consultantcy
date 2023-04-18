import { AgoraVideoPlayer,IAgoraRTCRemoteUser,ICameraVideoTrack,IMicrophoneAudioTrack } from "agora-rtc-react";
const Videos = (props: {
    users: IAgoraRTCRemoteUser[];
    tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
  }) => {
    const { users, tracks } = props;
  
    return (
   
        <div id="videos " className="h-full" >
          <AgoraVideoPlayer   videoTrack={tracks[1]} style={{height: '95%', width: '95%'}} />
          {users.length > 0 &&
            users.map((user) => {
              if (user.videoTrack) {
                return (
                  <AgoraVideoPlayer  videoTrack={user.videoTrack} style={{height: '95%', width: '95%'}} key={user.uid} />
                );
              } else return null;
            })}
        </div>
    );
  };

  export default Videos