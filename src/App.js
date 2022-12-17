import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
  let post = "강남 우동 맛집";
  let [글제목, 제목변경] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <button onClick = {()=>{
        let copy = [...글제목];
        copy[0] = '여자코트추천';
        제목변경(copy);
        }}>버튼</button>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={() =>{따봉변경(따봉+1)}}>❤️</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() =>{setModal(modal+1)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h4>{a} <span onClick={() =>{
                let copy = [...따봉];
                // copy[i] = copy[i] + 1;
                따봉변경(copy[i])}}>
                ❤️</span> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal % 2 == 0 ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
