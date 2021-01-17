import React, {Component} from 'react';
import '../App.css';

class Header extends Component {
    render(){
    return (
        <header className="App-header" id="App-header">
          <nav className="App-header-nav">
            <ul className="App-header-nav-ul">
              <li className="App-header-nav-ul-li"><a href="#App-header">Home</a></li>
              <li className="App-header-nav-ul-li"><a href="#App-main-Main">About</a></li>
              <li className="App-header-nav-ul-li"><a href="#item">Project</a></li>
            </ul>
          </nav>
          
        </header>
    );
  }
}

export default Header;