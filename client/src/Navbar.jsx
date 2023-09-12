import { Link } from 'react-router-dom'
import "./index.css"
import profileLogo from './aisha.jpg'

const Navbar = () => {
    const user=true
    return (
         
    <nav className="navbar">
        <h1>Cradle</h1>

        <div className="nav-links">
        <Link to="/">Trending</Link>         
        <Link to="/">Explore</Link>         
        <Link to="/">My Feed</Link>          
        <Link to="/create">New Blog</Link> 
              
      
        </div>    
         
        <div className="nav-links">
        {
            user ? (
              
                <div className="profileLinks">
                <img className="profileLogo"
                            src={profileLogo}
                            alt="profile logo" />
                             <Link to="/">
                            
                            {user &&  <i class="fa-solid fa-arrow-right-from-bracket logOut"></i> }    
                            </Link>  
                               
                            </div>
            ):(
                <div className="nav-links">
                <Link
                 className="nav-links" 
                to="/login">
                Login
                </Link>
                <Link
                 className="nav-links"
                 to="/signup">
                 Sign Up
                 </Link>
                </div>
              
            )
        }
          

                
     
        </div>
      
    </nav>
      );
}
 
export default Navbar;