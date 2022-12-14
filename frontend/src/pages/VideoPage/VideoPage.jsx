
import React, { useState, useEffect } from 'react';



 const VideoPage = (props) => {
 
     const [videoId, setVideoId] = useState([]);
     
        
      useEffect(() => {
        // async function handleSubmit(event) {
        //     event.preventDefault();
            
            let SearchResult = props.parentEntries.map(entry => {
            return [entry, ...entry.videoId];
            });
            setVideoId(SearchResult);
        }, [props.parentEntries]);
        
    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" title='User Video'
            frameborder="0"
            ></iframe>
         </div>
    );
 }
    
    export default VideoPage;