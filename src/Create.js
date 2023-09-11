// import { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// const Create = () => {

//     const [title, setTitle] = useState('')
//     const [body, setBody] = useState('')
//     const [author, setAuthor] = useState('John')
//     const [loading, setLoading] = useState(false)
//     const history = useHistory()


    
//     const handleSubmit = async (e)=>{
//         e.preventDefault()
//         const blog = {title, body, author}
//         setLoading(true)
//         let result = await fetch('http://localhost:8000/blogs',{
//             method:'POST',
//            headers:{'Content-type': 'application/json'},
//            body: JSON.stringify(blog)
//         })
//         result = await result.json();
//         console.warn(result);
//         if (result) {
//             alert("Data saved succesfully");
//             setTitle("");
//             setBody("");
//             setAuthor("")
           
//             setLoading(false)
//             history.push('/')

//         }
       
//     }
        
//     return (
//         <div className="create">
//             <h2>Add new Blog</h2>
//             <form onSubmit={ handleSubmit }>
//                 <label>Blog title:</label>
//                 <input 
//                 type="text"
//                 required
//                 value = { title }
//                 onChange={(e)=> setTitle(e.target.value)}
//                 />
//                  <label>Blog body:</label>
//                  <textarea
//                  required
//                  value={body}
//                  onChange={(e)=> setBody(e.target.value)}
//                  >
//                  </textarea>

//                  <label>Blog Author:</label>
//                  <select 
//                   value={author}
//                   onChange={(e)=>setAuthor(e.target.value)}
//                  >
//                     <option value="John">John</option>
//                     <option value="Anna">Anna</option>
//                  </select>
//                   {!loading && <button>Add New Blog</button>}
//                   {loading && <button disabled>Adding Blog...</button>}

                
//             </form>
//         </div>
//       );


// }
 
// export default Create;


// // .then(()=>{
// //     console.log('new blog added')
// //     setLoading(false)
// //     history.push('/')