import React, {Component} from 'react';
import '../App.css';
import youtubeClone from '../Img/YoutubeClone.png';

class ReadPortfolioList extends Component {
    render(){
        var portfolioList = [{id:1, title:'YoutubeClone', image:youtubeClone,
      desc:'디자인에 대한 지식이 없던 저는 어떤 디자인으로 Web Page 를 만들어 볼까 고민을 하는 중 YoutubeClone 코딩이라는 컨텐츠를 보게 되었습니다. 이 컨텐츠로 처음  동적인 Web Page 를 만들어 보았고, 해당 컨텐츠를 만드신 분의 다양한 컨텐츠를 통해 HTML, CSS, JS 에 대한 지식이 굉장히 많이 향상되었습니다.', link:'https://github.com/ohhyunmin/YoutubeClone'}];
        var lists=[];
        var i = 0;
        while(i<portfolioList.length){
          lists.push(<li key={portfolioList[i].id} className="item">
              <div className="portfolio_img">
                <img src={portfolioList[i].image} alt=""/>
              </div>
              <div className="portfolio_cont">
                <p>
                  <h2>
                    {portfolioList[i].title}
                  </h2> 
                  <section>
                    {portfolioList[i].desc}
                  </section>
                  <a href={portfolioList[i].link}>Github</a>
                </p>
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