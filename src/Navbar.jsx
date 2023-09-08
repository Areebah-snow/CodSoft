import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
         
    <nav className="navbar">
        <h1>Cradle</h1>
        <div className="nav-links">
        <Link to="/">Trending</Link>         
        <Link to="/">Explore</Link>         
        <Link to="/">My Feed</Link>          
        <Link to="/create">New Blog</Link>         
        <Link to="/">Profile</Link>         
        <Link to="/">Logout</Link>         
        </div>
    </nav>
      );
}
 
export default Navbar;