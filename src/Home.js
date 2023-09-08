
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs,loading,error} = useFetch( 'http://localhost:8000/blogs')


    return (
        <div className="home">
           { error && <p>{ error }</p> }
           {loading && <p>Please wait a few seconds</p>}
          
          { blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        
           
        </div>
      );
}
 
export default Home;


//  const [name, setName] = useState('Areebah')
    //  const [age, setAge] = useState(23)


    // const handleClick = (e) =>{
    //    setName('Aisha')
    //    setAge('25')
