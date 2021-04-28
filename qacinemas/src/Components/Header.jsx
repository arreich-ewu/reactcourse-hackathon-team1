import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">

          <nav className="navbar-brand">QA</nav>
          <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item px-3">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-item px-3">
                    <a href="/">Schedule</a>
                  </li>
                  <li className="nav-item px-3">
                    <a href="/">Signup</a>
                  </li>
                </ul>
            </div>
      </nav>
    </header>
  );
};


export default Header;
