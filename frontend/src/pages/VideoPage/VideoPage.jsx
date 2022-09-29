import { useEffect, useState } from "react";
import DisplaySearchResults from "../SearchPage/DisplaySearchResults";
import SearchPage from "../SearchPage/SearchPage";

 const VideoPage = () => {
 
     const [videoId, setVideoId] = useState([]);
     
        
      useEffect(() => {
          console.log("Video Page", videoId.data);
             }, []);
         setVideoId()
     };
     async function handleSubmit(event) {
         event.preventDefault()
         let SearchResult = {            
             videoId: videoId,
       
         };       
     
    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"
            ></iframe>
         </div>
    );
    } 
export default VideoPage;