import React, {Component} from 'react';
import '../App.css';

class Header extends Component {
    render(){
    return (
        <header className="App-header">
          <nav className="App-header-nav">
            <ul className="App-header-nav-ul">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Project</li>
            </ul>
          </nav>
          
        </header>
    );
  }
}

export default Header;