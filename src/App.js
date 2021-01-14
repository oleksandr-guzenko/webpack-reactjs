import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import AdminPanel from './Pages/AdminPanel';

function App() {
  const env = process.env.NODE_ENV;
  let mode;
  if (env === 'development') {
    mode = process.env.LOCALHOST
  }
  else {
    mode = process.env.HOST
  }
  console.log(mode)
  return (
    <main className="loader">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home mode={mode} />
          </Route>
          <Route exact path="/admin/panel">
            <AdminPanel mode={mode} />
          </Route>
          <Route exact path="/admin/panel/ft5">
            <AdminPanel mode={mode} />
          </Route>
          <Route exact path="/admin/panel/ft10">
            <AdminPanel mode={mode} />
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