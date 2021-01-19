/* eslint-disable */
//워닝 안보임 - //랑 /* */랑 차이는 뭘까..?
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목리스트샘플, 글제목변경샘플] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  
  return (
    <div className="App">
      <div className="black-nav"> 
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목리스트샘플[0]}</h3> 
        <p>2021년 1월 18일 발행</p>
        <hr/>
        <h3>{ 글제목리스트샘플[1]}</h3> 
        <p>2021년 1월 18일 발행</p>
        <hr/>
        <h3>{ 글제목리스트샘플[2]}</h3> 
        <p>2021년 1월 18일 발행</p>
        <hr/>
      </div>
    </div>
  );  
}

export default App;
