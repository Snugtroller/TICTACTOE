import React, { useRef, useState } from 'react';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/close.png';
import './tic.css';

let data = ["", "", "", "", "", "", "", "", ""];

const Tic = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleref = useRef<HTMLDivElement>(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle = (e: React.MouseEvent<HTMLDivElement>, num: number) => {
    if (lock) {
      return;
    }
    if (count % 2 === 0) {
      e.currentTarget.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.currentTarget.innerHTML = `<img src="${circle_icon}">`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkwin();
  }
  const checkwin=()=>{
    if (data[0]==data[1]&& data[1]==data[2] && data[2]!==""){
      won(data[2]);
    }
    else if(data[3]==data[4]&& data[4]==data[5] && data[5]!==""){
    won(data[5]);
  }
  else if(data[6]==data[7]&& data[7]==data[8] && data[8]!==""){
    won(data[8]);
  }
  else if(data[0]==data[3]&& data[3]==data[6] && data[6]!==""){
    won(data[6]);
  }
  else if(data[1]==data[4]&& data[4]==data[7] && data[7]!==""){
    won(data[7]);
  }
  else if(data[2]==data[5]&& data[5]==data[8] && data[8]!==""){
    won(data[8]);
  }
  else if(data[0]==data[4]&& data[4]==data[8] && data[8]!==""){
    won(data[8]);
  }
  else if(data[3]==data[4]&& data[4]==data[6] && data[6]!==""){
    won(data[6]);
  }
  else if (data[0]==data[1]&& data[1]==data[2] && data[2]!==""){
    won(data[2]);
  }
  else if (data[2]==data[4]&& data[4]==data[6] && data[6]!==""){
    won(data[6]);
  }
}
  const won=(winner :string[])=>{
    setLock(true);
    if(titleref.current){
    if (winner[0]=="x"){
        titleref.current.innerHTML=`Congratulations you win:<img src=${cross_icon}>`; 
    }
    else{
      titleref.current.innerHTML=`congratulations you win:<img src=${circle_icon}>`;
    }
  }
  }

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    if (titleref.current) {
        titleref.current.innerHTML = "Tic Tac Toe Game In React";
    }
    box_array.map((e) => {
        if (e.current) {
            e.current.innerHTML = "";
        }
    });
};


  return (
    <div className="body">
      <div className="container">
        <div className="title" ref={titleref}>Tic Tac Toe Game In React</div>
      </div>
      <div className="box-container">
        <div className="box-row">
          <div className="box" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
          <div className="box" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
          <div className="box"ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="box-row">
          <div className="box" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
          <div className="box" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
          <div className="box" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className="box-row">
          <div className="box" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
          <div className="box" ref={box8}  onClick={(e) => { toggle(e, 7) }}></div>
          <div className="box" ref={box9}  onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>
      <div className="reset-container">
        <div className="reset" onClick={()=>{reset()}}>Reset</div>
      </div>
    </div>
  );
};

export default Tic;
