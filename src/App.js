import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserProfile from "./component/abcbank/ListUserProfile";
import Registration from "./component/abcbank/Registration";
import UserLogin from "./component/abcbank/UserLogin";


function App() {
  return (
    <div className="App">


        <Router>
            <div className="col-md-6">
                <h1 className="text-center">ABC BANK</h1>

                <Switch>
                    <Route path="/" exact component={UserLogin}/>
                    <Route path="/UserLogin" exact component={UserLogin}/>
                    <Route path="/users" exact component={ListUserProfile}/>
                    <Route path="/registration" exact component={Registration}/>

                </Switch>
            </div>
        </Router>


    </div>
  );
}

export default App;
