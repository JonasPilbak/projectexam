
import './App.css';

import ManagerLogin from "./Components/ManagerLogin";
import IdeaPage from "./Components/IdeaPage";
import {BasicTable} from "./Components/BasicTable";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BrowsePage from "./Components/BrowsePage";
import TableFetch from "./Components/TableFetch";
import Manager from "./Components/Manager";
import InputPage from "./Components/InputPage";
import LoginForm from "./Components/LoginForm";
import ManagerAddComment from "./Components/ManagerAddComment";
import ApiFetch from './Components/ApiFetch';


function App() {
  return (
    <div className="App">
      <Router>
      
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
