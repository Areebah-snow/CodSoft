import React from 'react';
import './posts.css'
import Post from './Post';

const Posts = () => {
    return(
       
           <div className="posts-container">
                <h1>Recents</h1>
                <div className="posts">
           
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
           </div>
            
    
    )
}


export default Posts;