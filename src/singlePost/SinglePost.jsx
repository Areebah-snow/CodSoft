import React from 'react';
import './singlePost.css';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostContainer">
                <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="editContainer">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </div>
                </h1>
                <div className="singlePostDetails">
                    <span className="singlePostAuthor">Author: <b>Mary Anne</b></span>
                    <span className="singlePostDate">21 May 2020</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Voluptate maxime modi culpa, vitae tempora,
                      necessitatibus, hic magnam placeat similique 
                      reprehenderit quaerat cumque quo fugit 
                    facilis odit explicabo recusandae corporis distinctio!
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Voluptate maxime modi culpa, vitae tempora,
                      necessitatibus, hic magnam placeat similique 
                      reprehenderit quaerat cumque quo fugit 
                    facilis odit explicabo recusandae corporis distinctio!
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Voluptate maxime modi culpa, vitae tempora,
                      necessitatibus, hic magnam placeat similique 
                      reprehenderit quaerat cumque quo fugit 
                    facilis odit explicabo recusandae corporis distinctio!
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Voluptate maxime modi culpa, vitae tempora,
                      necessitatibus, hic magnam placeat similique 
                      reprehenderit quaerat cumque quo fugit 
                    facilis odit explicabo recusandae corporis distinctio!
              
              
                </p>

             
            </div>
        </div>
    )
}




export default SinglePost;