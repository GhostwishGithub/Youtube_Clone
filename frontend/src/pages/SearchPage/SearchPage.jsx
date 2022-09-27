import { useEffect, useState } from "react";
import axios from "axios";

function SearchPage() {
  const [searchedVids, setSearchedVids] = useState([]);

  const fetchSearchedVideos = async () => {
    let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=Bob Ross&key={AIzaSyDDOWllblIFuS0NimgmZ9Yd7g859jc12Ek}&part=snippet")
    debugger
    console.log("Youtube search response: ",response.data)
    setSearchedVids(response.data.items)
  };

}

export default SearchPage;