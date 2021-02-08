import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from "./home/index.js"
import FileA from "./home/myname/FileA"
import FileB from "./home/myname/FileB"
import Breadcrumbs from "./Breadcrumbs"
import Mysupersecretfile from "./home/projects/mysupersecretproject/Mysupersecretfile"
function App() {
  return (

    <div className="container">
      
        <div className="row">
          <div class ="col-md-12 mt-4">
        <Breadcrumbs/>

        <Switch>
          <Route exact from="/" render={(props) => <Home {...props}/>}/>
          <Route exact from="/myname" render={(props) => <Home {...props}/>}/>
          <Route exact from="/myname/fileA" render={(props) => <FileA {...props}/>}/>  
          <Route exact from = "/myname/fileB" render={(props) => <FileB {...props}/>}/>
          <Route exact from = "/projects" render={(props) => <Home {...props}/>}/>
          <Route exact from = "/projects/mysupersecretproject"  render={(props) => <Mysupersecretfile {...props}/>}/>
        </Switch> 
        </div>
    </div>

    </div>
  );
}
export default App;