import logo from './logo.svg';
import './App.css';

function App() {

  let post ='강남 불고기 맛집'
  let title ='제목'
  let content ='내용'

  return (
    <div className="App">
      <div className="black-nav"> 
      <div>
          개발 Blog 
      </div>
      
      </div>
      {/* <div className="list">
          <ol>{title}</ol>
          <ul>{content}</ul>
      </div> */}
      <div className="list">
        <h3>{ post }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
