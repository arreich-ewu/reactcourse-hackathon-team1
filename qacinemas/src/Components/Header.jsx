import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Schedule from './ScheduleTable.jsx'
import SignupForm from './SignupForm.jsx'

const Header = () => {
  return (
    <header>

      <Router>
        <div>
      <nav className="navbar navbar-expand-sm">
          <nav className="navbar-brand">QA</nav>
          <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item px-3">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-item px-3">
                    <a href="/schedule">Schedule</a>
                  </li>
                  <li className="nav-item px-3">
                    <a href="/signup">Signup</a>
                  </li>
                </ul>
            </div>
      </nav>

      <Switch>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
        </Switch>

      </div>
      </Router>

    </header>
  );
};


export default Header;
