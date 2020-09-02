import React, {useRef, useState} from 'react';
import '../css/video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url,channel,description,song,likes,messages,shares}) => {

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
                src={url}
            ></video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>

        </div>
    );
};

export default Video;
