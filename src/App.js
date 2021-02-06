import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import Login from './Pages/Login';
function App() {
  const env = process.env.NODE_ENV;
  let mode;
  if (env === 'development') {
    mode = process.env.LOCALHOST
  }
  else {
    mode = process.env.HOST
  }
  return (
    <main className="loader">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home mode={mode} />
          </Route>
          <Route exact path="/dashboard">
            <Login mode={mode} />
          </Route>
          <Route exact path="/dashboard/ft5">
            <Login mode={mode} />
          </Route>
          <Route exact path="/dashboard/ft10">
            <Login mode={mode} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;