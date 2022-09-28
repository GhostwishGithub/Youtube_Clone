import React, { useState } from 'react';


 export default function DisplaySearchResults(props){
    //Take the videos passed down from SearchPage. Done! props.searchedVids
    //Map through the videos and display the thumbnail using an <img/> tag
    //When clicked (onClick), pass the id of the video to a function called handleSubmit.
    return <div>
        {console.log("Searched Videos inside of DisplaySearchResults: ", props.searchedVids)}
        <h3>This is where the search results will be displayed</h3>
    </div>
 }