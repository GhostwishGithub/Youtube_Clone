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
          console.log(error.response.data.items[0].id);
        }
      };
      fetchSearchVids();
    }, [token]);

    const SearchButton = (props) => {

      const [Search, setSearch] = useState("inactive");
    
      function SearchClick(){
       if(Search === "inactive"){
        setSearch("active");
       }
       else{
        setSearch("inactive");
       } 
       props.SearchClick.map(Search)
      }
    return (
      <div>
            <iframe
            id="YouTube Clone"
            type="text/html"
            width="640"
            height="360"
              key={searchedVids.id}
              src ={'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'}
              frameBorder="0"
            ></iframe>
            <div>
              <input type="text" onClick={SearchPage} onChange={(selection)=>console.log(selection.target.value)} className="searchTerm" placeholder="SEARCH"></input>
              <button type='submit' className="searchButton">
              <i className="fa-fa search">search</i>
              </button>
            </div>
      </div>
    );
  };
}
  export default SearchPage;