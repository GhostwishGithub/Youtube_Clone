


 export default function DisplaySearchResults(props){
    //Take the videos passed down from SearchPage. Done! props.searchedVids
    //Map through the videos and display the thumbnail using an <img/> tag
    //When clicked (onClick), pass the id of the video to a function called handleSubmit.
    function handleClick(video){
        console.log(video)
        let videoId = video.id.videoId
        console.log(videoId)
    }

    return (
        <div>
            {props.searchedVids.map((element) => {
                return (
                    <img src={element.snippet.thumbnails.default.url} alt="Error" onClick={() => handleClick(element)} />
                );
            })}
        </div>
    );
    //<div>
      //  {console.log("Searched Videos inside of DisplaySearchResults: ", props.searchedVids)}
       // <h3>This is where the search results will be displayed</h3>
    //</div>
 }
//  const DisplayPage = () => {
//     const [videoSearch, setVideoSerach] = useState([]);

//     useEffect(() => {

//     }, [])
//     async function handleSubmit(event){
//         event.preventDefault()

//         let response = await axios.get('https://i.ytimg.com/vi/M_rBtYNppdc/default.jpg')
//         debugger
//         console.log("Is this right?", response.data.items[0].snippet.thumbnails.default.url)
//     }
//  }
 