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
  return (
    <main className="loader">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin/panel">
            <AdminPanel />
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