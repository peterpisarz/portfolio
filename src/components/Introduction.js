import React, { useEffect } from 'react'

const Introduction = () => {
    const videoId = 'f_6w4LckjGs';
    const apiKey = process.env.YOUTUBE_API_KEY;

    useEffect(() => {
        // This function creates the YouTube player once the API is ready
        function createYouTubePlayer() {
            new window.YT.Player('youtube-player', {
                videoId: videoId,
                width: 640,
                height: 360,
            });
        }

        // Load the YouTube Player API
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.onload = createYouTubePlayer;
        document.body.appendChild(script);

        // Clean up the script tag when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="social">
            <h2>Introduction</h2>
            <div id="youtube-player"></div>
        </div>
    );
}

export default Introduction;