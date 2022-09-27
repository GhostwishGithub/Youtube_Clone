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
          let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=Bob Ross&key={AIzaSyDDOWllblIFuS0NimgmZ9Yd7g859jc12Ek}&part=snippet", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setSearchedVids(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchSearchVids();
    }, [token]);
    return (
      <div className="container">
        <h1>Search Page for {user.searchedVids}!</h1>
        {searchedVids &&
          searchedVids.map((user) => (
            <p key={searchedVids.id}>
              {searchedVids.video_id} {searchedVids.name} {searchedVids.title}
            </p>
          ))}
      </div>
    );
  };
  export default SearchPage;