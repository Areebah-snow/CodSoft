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

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Homepage /> */}
        {/* <SinglePage/> */}
        <Write/>


       
        <div className="content">
         {/* <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/create"><Create/></Route>
            <Route path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*"><NotFound /></Route>
         </Switch> */}
        </div>
    </div>
    </Router>
 
  );
}

export default App;
