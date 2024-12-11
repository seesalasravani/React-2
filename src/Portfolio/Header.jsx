import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><a href="my-app\src\Portfolio\Home.jsx" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="my-app\src\Portfolio\Aboutus.jsx" className="nav-link">About</a></li>
            <li className="nav-item"><a href="my-app\src\Portfolio\Project5.jsx" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="my-app\src\Portfolio\Contact.jsx" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
