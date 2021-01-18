import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경함수] = useState('남자 코트 추천');
  //[state데이터, state데이터변경함수]
  //state는 1. 변수 대신 쓰는 데이터 저장공간 2. useState()를 이용해 만들어야함
  let post ='강남 불고기 맛집'

  return (
    <div className="App">
      <div className="black-nav"> 
      <div>
          개발 Blog 
      </div>
      
      </div>
      <div className="list">
        <h3>{ 글제목 }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
