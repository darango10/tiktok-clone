import React from 'react';
import './App.css';
import Video from "./components/Video";

function App() {
    return (
        <div className="app">
            <div className="app__videos">
                <Video
                    channel={'darango'}
                    description={'WOW epic MERN tiktok clone'}
                    song={'My song'}
                    shares={12}
                    likes={547}
                    messages={14}
                    url={'https://player.vimeo.com/external/451079862.sd.mp4?s=4101087f17754a78a31a1e9bab109efe879a8f9d&profile_id=165&oauth2_token_id=57447761'}/>
                <Video
                    channel={'other'}
                    description={'working'}
                    song={'My song'}
                    shares={10}
                    likes={254}
                    messages={17}
                    url={'https://player.vimeo.com/external/428447126.sd.mp4?s=cd98eb37adbdb59d32907c1d72c0bc3fb1bf797a&profile_id=139&oauth2_token_id=57447761'}/>
            </div>
        </div>
    );
}

export default App;
