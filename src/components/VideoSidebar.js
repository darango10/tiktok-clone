import React from 'react';
import '../css/videoSidebar.css'
import {Favorite, Message, Share} from "@material-ui/icons";

const VideoSidebar = () => {
    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">
                <Favorite fontSize="large"/>
                <p>100</p>
            </div>

            <div className="videoSidebar__button">
                <Message fontSize="large"/>
                <p>250</p>
            </div>

            <div className="videoSidebar__button">
                <Share fontSize="large"/>
                <p>12</p>
            </div>
        </div>
    );
};

export default VideoSidebar;
