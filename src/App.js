import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route, Switch   } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Homepage from './pages/home/Homepage';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Homepage />
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
