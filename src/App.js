
import './App.css';

import ManagerLogin from "./Components/ManagerLogin";
import IdeaPage from "./Components/IdeaPage";
import ApiFetch from "./Components/ApiFetch";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
      
      <Route exact path="/" component={IdeaPage}></Route>
    
      <Route exact path="/Browse" component={IdeaPage}></Route>
     
            
            <Route exact path="/overview" component={ApiFetch}></Route>

            <Route exact path="/managerLogin" component={ManagerLogin}></Route>
            
      </Switch>

      </Router>


    
    </div>
  );
}

export default App;
