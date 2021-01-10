import React, {Component} from 'react';
import '../App.css';
import youtubeClone from '../Img/YoutubeClone.png';

class ReadPortfolioList extends Component {
    render(){
        var portfolioList = [{id:1, title:'youtubeClone', image:youtubeClone}];
        var lists=[];
        var i = 0;
        while(i<portfolioList.length){
          lists.push(<li key={portfolioList[i].id} className="item">
              <div className="portfolio_img">
                <img src={portfolioList[i].image} alt=""/>
              </div>
              <div className="portfolio_cont">
                <p>{portfolioList[i].title} </p>
              </div>
            </li>);
            i=i+1;
        }
    return (
        <div className="portfolio">
          <ul className="portfolio_list">
            {lists}
          </ul>
        </div>
    );
  }
}

export default ReadPortfolioList;