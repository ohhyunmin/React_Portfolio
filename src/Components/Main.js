import React, {Component} from 'react';
import '../App.css';
import imgMain from '../Img/ImgMain.png'
import ReadPortfolioList from './ReadPortfolioList';

class Main extends Component {
    render(){
    return (
      <main className="App-main">
        <div className="App-main-mainImage">
          <img src={imgMain} className="mainImage" alt="" />
        </div>
        <div className="App-main-About">
          
        </div>
        <ReadPortfolioList></ReadPortfolioList>
      </main>
    );
  }
}

export default Main;