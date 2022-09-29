import { useEffect, useState } from "react";
import DisplaySearchResults from "../SearchPage/DisplaySearchResults";
import SearchPage from "../SearchPage/SearchPage";

const VideoPage = (props) => {
    const [videoId, setVideoId] = useState([]);
    
    useEffect(() => {
        
    }, []);
    
        console.log("Video Page", videoId);
    };
    async function handleSubmit(event) {
        event.preventDefault()
        let SearchResult = {            
            videoId: videoId,
       
        };       
     
    return (
        <form onSubmit={handleSubmit}>
            <iframe
                id="YouTube Clone"
                type="text/html"
                width="640"
                height="360"
                key={VideoPage}
                src ={"https://i.ytimg.com/vi/_caMQpiwiaU/default.jpg"}
                frameborder="0"
            ></iframe>

        {<VideoPage SearchPage={SearchPage}/> }
        {<DisplaySearchResults SearchPage={SearchPage}/> }
        </form>
    );
    } 
export default VideoPage;