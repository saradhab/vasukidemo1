import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserProfile from "./component/abcbank/ListUserProfile";
import Registration from "./component/abcbank/Registration";
import UserLogin from "./component/abcbank/UserLogin";
import Profile from "./component/abcbank/Profile";
import AddPayee from "./component/abcbank/AddPayee";
import ApplyLoan from "./component/abcbank/ApplyLoan";


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
                    <Route path="/Profile" exact component={Profile}/>
                    <Route path="/AddPayee" exact component={AddPayee}/>
                    <Route path="/ApplyLoan" exact component={ApplyLoan}/>

                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
