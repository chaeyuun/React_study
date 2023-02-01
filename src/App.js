import "./App.css";
import { useState } from "react";

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateStr = year + '년 ' + month + '월 ' + day + '일 ';
  let post = "강남 우동 맛집";
  let [글제목, 제목변경] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(0);
  let [title, cgtitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      {/* <Link to="/">
        <button>홈</button>
      </Link>
      <Link to="/detail">
        <button>디테일</button>
      </Link>
      <Link to="/about">
        <button>어바웃</button>
      </Link> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/detail" element={<div>상세페이지</div>}/>
          <Route path="/about" element={<div>어바웃페이지</div>}/>
        </Routes>
      </BrowserRouter> */}

      <div className="black-nav">
        <h4>Chaeyoon's Blog</h4>
        
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
              <h4 onClick={() =>{setModal(modal+1);
              cgtitle(i);
              }}>{a}  </h4>
              <span onClick={(e) =>{
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)}}>
                ❤️</span> {따봉[i]}
              <p>{dateStr}<button onClick={()=>{let copy = [...글제목]; copy.splice(i, 1); 제목변경(copy);}}>삭제</button></p>
            </div>
          )
        })
      }

      {/* <input 
      onChange={(e)=>{
        if ((e.target.value).length >= 1){
          입력값변경(e.target.value);
        }}}
      onKeyUp={(e)=>{
        if (e.key == 'Enter') {
          let copy = [...글제목]; copy.unshift(입력값); 제목변경(copy);
          let copy따봉 = [...따봉]; copy따봉.unshift(0); 따봉변경(copy따봉);
        }
      }}
      />  */}
      <button
      onClick={()=>{
        let copy = [...글제목]; copy.unshift(입력값); 제목변경(copy);
        let copy따봉 = [...따봉]; copy따봉.unshift(0); 따봉변경(copy따봉);
      }}>게시</button>

      {
        modal % 2 == 0 ? <Modal title = {title} 글제목변경={제목변경} 글제목 = {글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        //  깃허브 잔디심기용임 주석 풀어야함
        props.글제목변경(copy);
        }}>수정</button>
      </div>
  )
}

export default App;
