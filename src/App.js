/* eslint-disable */
//워닝 안보임 - //랑 /* */랑 차이는 뭘까..?
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목리스트샘플, 글제목변경샘플] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let n = 0;
  //useState쓰면 되잖아..!
  let [따봉, 따봉변경] = useState(0);
  //따봉변경(대체할데이터)
  return (
    <div className="App">
      <div className="black-nav"> 
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목리스트샘플[0]}
        <span onClick={()=>{
          따봉변경(따봉 + 1)
          }}> 👍 </span> 
        {/* 
        옛날 자바스크립트 : onClick = "클릭될 때 실행할 JS" 
        리액트 : onClick = {클릭될 때 실행할 함수}
        애로우 펑션, 콜백 함수
        */}
        {따봉}
        </h3> 
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
