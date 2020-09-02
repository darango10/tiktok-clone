import React from 'react';
import '../css/videoFooter.css'
import {MusicNote} from "@material-ui/icons";
import Ticker from "react-ticker";

const VideoFooter = () => {
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <h3>@darango</h3>
                <p>This is some description</p>
                <div className="videoFooter__ticker">
                    <MusicNote className='videoFooter__icon'/>

                    <Ticker mode={'smooth'}>
                        {({index}) => (
                            <>
                                <p>I'm a song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className='videoFooter__record'
                src="https://static.thenounproject.com/png/934821-200.png" alt="record"/>
        </div>
    );
};

export default VideoFooter;