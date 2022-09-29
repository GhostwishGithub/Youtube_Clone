import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import DisplaySearchResults from "./DisplaySearchResults";

const SearchPage = (props) => {
    const [searchedVids, setSearchedVids] = useState([]);
    const [seachInput,setSearchInput] = useState("")
    const [user, token] = useAuth();
    useEffect(() => {
      
  console.log("Search Page")
    }, [token]);

    async function handleSubmit(event){
      //prevents default behavior of a form submission. (a page refresh)
      event.preventDefault()  
      let newSearch;
      console.log(seachInput)
      props.SearchPageProperty(newSearch)
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${seachInput}&key=AIzaSyDDOWllblIFuS0NimgmZ9Yd7g859jc12Ek&part=snippet`);
        console.log(response.data.items)
        //Below line give "searchedVids" the value of all videos searched
        setSearchedVids(response.data.items);
        //Take the results of this request (stored in searchedVids)
        //and pass it down to Display SearchResults as props.
      } catch (error) {
        console.log(error.response.data.items[0].id);
      }
    }

  
    return (
      <div className="container">
            <form onSubmit={handleSubmit}>             
              <input type="text"  className="searchTerm" onChange={(event)=>setSearchInput(event.target.value)} placeholder="SEARCH"></input>
              <button type='submit' className="searchButton">
              <i className="fa-fa search">search</i>
              </button>
             
            </form>

            <DisplaySearchResults searchedVids={searchedVids}/>
      </div>
    );
  };
  export default SearchPage;