import React from 'react';
import './posts.css'

const Post = () => {
    return (
        
        <div className="post">
                    <div className="post-image">
                        <img src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <h3 className="post-title">
                        <a href="">
                        5 things to carry when traveling
                        </a>
                      
                    </h3>
                    <div className="post-details">
                        
                        <p className="date">21 May 2020</p>
                        <span className="category travel">Travel</span>

                        <p className="post-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Est perspiciatis, minus porro error tenetur
                             aliquid, dolor veritatis tempora assumenda, rem neque.
                              Possimus esse a impedit nostrum 
                            et obcaecati consequuntur cupiditate.
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Est perspiciatis, minus porro error tenetur
                             aliquid, dolor veritatis tempora assumenda, rem neque.
                              Possimus esse a impedit nostrum 
                            et obcaecati consequuntur cupiditate.
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Est perspiciatis, minus porro error tenetur
                             aliquid, dolor veritatis tempora assumenda, rem neque.
                              Possimus esse a impedit nostrum 
                            et obcaecati consequuntur cupiditate.
                        </p>
                        <p className="author">Mary Jane</p>
                      
                    </div>
                </div>
    )
}



export default Post;