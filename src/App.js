import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route, Switch   } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Homepage from './pages/home/Homepage';
import Posts from './posts/Posts';
import SinglePage from './pages/singlePage/SinglePage';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { WriteError } from 'mongodb';
import SinglePost from './singlePost/SinglePost';

function App() {
  
  return (
    <Router>
     
        <Navbar />
        
    
       
       
         <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
            <Route path="/write">
              <Write/>
            </Route>

            
            {/* <Route path="/post/:PostId"><SinglePost /></Route> */}
            <Route path="*"><NotFound /></Route>
         </Switch>
     

    </Router>
 
  );
}

export default App;
