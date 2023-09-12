import React from 'react';
import './create.css'

const Write = () => {
    return (
        <div className="write">
            <img 
            className='writeImg'
            src="https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
           <form action="" className='writeForm' >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="fa-solid fa-plus writeIcon"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}  />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus />
                </div>

                <div className="writeFormGroup">
                    <textarea
                     placeholder='Write new blog here . . .' 
                     type='text' 
                     className='writeInput writeText'>
                     </textarea>
                </div>
                <button className='writeSubmit'>Add New Blog</button>
           </form>
        </div>
    )
}



export default Write;