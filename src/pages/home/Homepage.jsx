import React from 'react';
import './home.css'
import Header from "../../Header"
import Posts from '../../posts/Posts';


const Homepage = () => {
    return ( 
    <>
      
    
      <Header/>
    <div className="home-div">
      
        <Posts/>
    </div>
    </>
  
    )
}



export default Homepage;