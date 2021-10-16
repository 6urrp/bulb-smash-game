import { Fragment, useState } from "react";
import { Route, Switch } from "react-router";

import Login from "./Components/Login/Login";
import Options from "./Components/Options/Options";

import './App.css';

function App() {
  const [hasName, setHasName] = useState(!!localStorage.getItem("name"));

  return  (
    <Fragment> 
      {!hasName ? 
      <Login setHasName={setHasName} /> 
      :
      <Options />
      } 
    
    </Fragment>
  )
}

export default App;
