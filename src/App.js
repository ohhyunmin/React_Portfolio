import React, {Component} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

class App extends Component {
    render(){
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
        
      </div>
      
    );
  }
}

export default App;
