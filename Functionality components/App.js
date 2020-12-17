
import './App.css';


import IdeaPage from "./Components/IdeaPage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BrowsePage from "./Components/BrowsePage";

import InputPage from "./Components/InputPage";
import Sidebar from "./Components/Sidebar";
import ApiFetch from './Components/ApiFetch';
import PostManPost from "./Components/postManPost";
import "./Components/sidebar.css";
import "./App.css";
import ManagerLogin from './Components/ManagerLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
       <Sidebar/>
       </div>
      <Switch>
       
      
      <Route exact path="/" component={IdeaPage}></Route>
    
      <Route exact path="/Browse" component={BrowsePage}></Route>
     
            
            <Route exact path="/overview" component={ApiFetch}></Route>

            <Route exact path="/managerLogin" component={InputPage}></Route>
            
      </Switch>

      </Router>


    
    </div>
  );
}

export default App;
