import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route, Switch   } from 'react-router-dom';

import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Homepage from './pages/home/Homepage';
import Posts from './posts/Posts';

import SinglePage from './pages/singlePage/SinglePage';
import Create from './pages/create/Create';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

import SinglePost from './singlePost/SinglePost';

function App() {
  const user = true

  
  return (
    <Router>
     
        <Navbar />
        {/* <Route exact path="/" element={<Homepage/>} />
        <Route path="/signup" element={<SignUp/>} />
     */}
       
       
         <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/signup">
             {user ? <Homepage/> : <SignUp/>}
            </Route>
            <Route path="/login">
            {user ? <Homepage/> : <Login/>}
            </Route>
            <Route path="/settings">
            {user ? <Settings/> : <SignUp/>}
            </Route>
            <Route path="/create">
            {user ? <Create/> : <SignUp/>}
            </Route>
            <Route path="/post/:postId"><SinglePost /></Route>
            <Route path="*"><NotFound /></Route> 
        </Switch> 
     

    </Router>
 
  );
}

export default App;
