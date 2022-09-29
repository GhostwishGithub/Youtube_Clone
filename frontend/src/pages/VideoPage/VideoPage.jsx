import DisplaySearchResults from "../SearchPage/DisplaySearchResults";
import SearchPage from "../SearchPage/SearchPage";



const DisplaySearchResults = () => {
return(
<div>
 <iframe
 id="YouTube Clone"
 type="text/html"
 width="640"
 height="360"
 key={VideoPage}
 src ={"https://i.ytimg.com/vi/_caMQpiwiaU/default.jpg"}
 frameborder="0"
 ></iframe>

 <VideoPage SearchPage={SearchPage}/>
 </div>
)
};
export default VideoPage;