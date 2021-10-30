import React, {Component} from 'react';
import '../App.css';
import youtubeClone from '../Img/YoutubeClone.png';
import crm from '../Img/고객 관리 시스템.png';
import reactPortfolio from '../Img/ReactPortfolio.png';
import Vacc_Total_Stat from '../Img/Vacc_Total_Stat.png';

class ReadPortfolioList extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolioList : [{id:1, title:'고객 관리 시스템', image:crm,
      desc:'고객 관리 시스템 Clone 코딩을 통해 웹사이트를 구현해보았습니다.', skill:"React, NodeJS, AWS-RDS (My-SQL), Material-UI", link:'https://github.com/ohhyunmin/React_Crm'},
      {id:2, title:'ReactPortfolio', image:reactPortfolio,
      desc:'React를 이용해 간단한 포트폴리오 페이지를 만들어보았습니다.', skill:"React", link:'https://github.com/ohhyunmin/React_Portfolio'},
      {id:3, title:'YoutubeClone', image:youtubeClone, skill:"HTML, CSS, Javescript",
      desc:'디자인에 대한 지식이 부족해 어떤 디자인으로 Web Page 를 만들어 볼까 고민을 하는 중 YoutubeClone 코딩이라는 컨텐츠를 보게 되었습니다. 이 컨텐츠로 처음  동적인 Web Page 를 만들어 보았고, 해당 컨텐츠를 만드신 분의 다양한 컨텐츠를 통해 HTML, CSS, JS 에 대한 지식이 굉장히 많이 향상되었습니다.', link:'https://github.com/ohhyunmin/YoutubeClone'},
      {id:4, title:'Spring Boot - Client / API Server', image:Vacc_Total_Stat, skill:"Spring Boot ( MVC, API )",
      desc:'Spring Boot 기반의 API Server 를 구현해보기 위한 Project 입니다. Client 와 API Server 를 각각 구현하였으며, 코로나19 접종현황 데이터는 공공데이터포털의 API 를 이용하였습니다. 링크는 Client 입니다. API Server 는 https://github.com/ohhyunmin/javaAPI/tree/master 입니다.', link:'https://github.com/ohhyunmin/javaClient/tree/master'}
      ]
    }
  }
    render(){
        var lists=[];
        var i = 0;
        while(i<this.state.portfolioList.length){
          lists.push(<li key={this.state.portfolioList[i].id} className="item" id="item">
              <div className="portfolio_img">
                <img src={this.state.portfolioList[i].image} alt=""/>
              </div>
              <div className="portfolio_cont">
              <h2>{this.state.portfolioList[i].title}</h2><br/><br/>
                <p>
                    <b>Description : </b>{this.state.portfolioList[i].desc}<br/><br/>
                    <b>Skill : </b>{this.state.portfolioList[i].skill}<br/><br/>
                    <a href={this.state.portfolioList[i].link}>Github</a>
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
