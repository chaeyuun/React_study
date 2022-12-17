import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
  let post = "강남 우동 맛집";
  let [a, b] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick = {()=>{
        let copy = [...a];
        copy[0] = '여자코트추천';
        b(copy);
        }}>버튼</button>
      <div className="list">
        <h4>
          {a[0]} <span onClick={() =>{따봉변경(따봉+1)}}>❤️</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
