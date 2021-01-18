import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경함수] = useState('남자 코트 추천');
  //[state데이터, state데이터변경함수]
  //state는 1. 변수 대신 쓰는 데이터 저장공간 2. useState()를 이용해 만들어야함 3. 문자,숫자,array,object 다 저장가능

  //array로 저장할 경우
  let 글제목리스트 = ['여자 코드 추천', '여자 신발 추천', '여자 가방 추천'];
  let [리스트, b] = useState(글제목리스트)

  //state 를 사용하는 이유
  //웹이 APP처럼 동작하게 만들고 싶어서
  //if states are changed, html will be re-rendering.

  //그냥 변수는 re-rendering 안됌

  //따라서, 자주 바뀌는 중요한 데이터는 변수말고 state로 저장해서 사용

  return (
    <div className="App">
      <div className="black-nav"> 
      <div>
          개발 Blog 
      </div>
      
      </div>
      <div className="list">
        <h3>{ 글제목 }</h3> 
        {/* array를 글자로 바꿔서 출력해줌 */}
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{ 리스트 }</h3> 
        {/* array를 글자로 바꿔서 출력해줌 */}
        <p>2021년 1월 18일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
