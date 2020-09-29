import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer.js';
import SearchPage from './SearchPage.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/App.css';


function App() {
  return (
    <div className="app">

        <Router>

            <Header />

            <Switch>
                <Route path="/search">
                    <SearchPage />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>

            <Footer />

        </Router>


    </div>
  );
}

export default App;

// "npm i react-router-dom" to setup react router

// npm i -g firebase-tools to deploy it to the firebase





/*
* Steps to deploy the app to the firebase:
*       1.  Create the project initiator in firebase
*       2. firebase login  (in terminal)
*       3. firebase init
*       4. navigate hosting, click spacebar, choose (BUILD) in "What you wanna do?" instead of public
*       5. Select 1 page app and hit   "npm run build"
*               6. firebase deploy  :)
* */