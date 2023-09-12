import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>Page not found</p>
            <Link to='/'>Go back to homepage</Link>
        </div>
     );
}
 
export default NotFound;