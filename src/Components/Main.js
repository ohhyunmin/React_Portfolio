import React, {Component} from 'react';
import '../App.css';
import MainImage from '../Img/MainImage.png'
import ReadPortfolioList from './ReadPortfolioList.js';

class Main extends Component {
    render(){
    return (
      <main className="App-main">
        <div className="App-main-Main" id="App-main-Main">
          <img src={MainImage} className="MainImage" alt="" />
        </div>
        <div className="App-main-About" id="App-main-About">
          <h1>
            도전하는 개발자
          </h1><br/>
          <section className="App-main-About-Section">
            다양한 웹 사이트 ( ESM2.0, 티몬, 롯데ON 등 ) 의
            API 와 Script 를 분석하며, Web에 대한 관심이 높아졌고
            관심이 높아진 만큼 도전해보고 싶다는 마음이 들었습니다.<br/><br/>
            이후 기초 지식이 있는 HTML, CSS, JS 를 기반으로 
            .Net Core Entity framework ( ORM ) 을 이용해 
            간단한 게시판을 구현해보았으며, C# 외의 언어를 통해
            구현해보고 싶은 마음에 React, NodeJS, Spring Boot등 을 
            이용해 간단한 Mini Project 를 진행해보았습니다.<br/><br/>
            더 나아가 새로운 기술을 습득하며, 특정 언어에 제약 받지 않는 개발자가
            되어가는 것이 저의 목표입니다.
          </section>
        </div>
        <ReadPortfolioList></ReadPortfolioList>
      </main>
    );
  }
}

export default Main;