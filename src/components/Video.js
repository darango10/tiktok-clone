import React, {useRef, useState} from 'react';
import '../css/video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = () => {

    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            setPlaying(true)
            videoRef.current.play();
        }
    }

    return (
        <div className='video'>
            <video
                onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
                src="https://player.vimeo.com/external/451079862.sd.mp4?s=4101087f17754a78a31a1e9bab109efe879a8f9d&profile_id=165&oauth2_token_id=57447761"
            ></video>
            <VideoFooter/>
            <VideoSidebar/>

        </div>
    );
};

export default Video;
