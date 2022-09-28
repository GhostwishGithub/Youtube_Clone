import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const SearchPage = () => {
    const [searchedVids, setSearchedVids] = useState([]);
    const [user, token] = useAuth();
    useEffect(() => {
      const fetchSearchVids = async () => {
        try {
          let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=Bob Ross&key=AIzaSyDDOWllblIFuS0NimgmZ9Yd7g859jc12Ek&part=snippet");
          console.log("RESPONSE COMING FROM SEARCHVIDEOS ",response)
          setSearchedVids(response.data.items);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchSearchVids();
    }, [token]);
    return (
      <div className="container">
        {searchedVids &&
          searchedVids.map((user) => (
            <p key={searchedVids.id}>
              {searchedVids.video_id} {searchedVids.name} {searchedVids.title}
              { <img src ='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com' alt="Demo Page"/> }
            </p>
          ))}
      </div>
    );
  };
  export default SearchPage;