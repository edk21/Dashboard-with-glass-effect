import React from 'react'
import './Homepage.css'
import styled from 'styled-components'
import {GiTronArrow} from 'react-icons/gi'
import {FaChrome, FaRegClock} from 'react-icons/fa'

function Homepage(){
  const data1 = [
    {"title": "Beginner 1", "description": "I've never done this before"},
    {"title": "Beginner 2", "description": "I've never done this before"},
    {"title": "Intermediate 1", "description": "I've done this before"},
    {"title": "Intermediate 2", "description": "I've done this before"},
    {"title": "Advanced", "description": "I master this"},
  ]
  return(
    <DIV>
      <HEADER>
        <div className="left">
          <h1>Choose Your Practise</h1>
          <p>Start your practise with the last ending or choose one among those available</p>
        </div>
        <div className="right">
          <div className="right-1">
            <p><FaRegClock/><span>Practise Lenght</span></p>
            <div className="description">
              <h3>15</h3>
              <img src="https://www.pngkit.com/png/full/139-1391910_progress-bar-png-loading-bar-yellow-png.png" alt="progrees-bar" />
            </div>
          </div>
          <button>Start Practise</button>
        </div>
      </HEADER>
      <TEXT>
        <p>PRACTISE</p>
        <p>MUSIC & VIDEO</p>
      </TEXT>
      <BODY>
        <LEFT>
          <LHEADER>
            <GiTronArrow/>
            <h1> Your Level</h1>
          </LHEADER>
          <LCARD>
            {data1.map((item,index) => {
              return(
                <div key={index} className="card-body">
                  <FaChrome/>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })} 
          </LCARD>
        </LEFT>
        <MIDDLE>
          <MHEADER>
            <GiTronArrow/>
            <h1> Your Level</h1>
          </MHEADER>
          <LCARD>
            
            {data1.map((item,index) => {
              return(
                <div key={index} className="card-body">
                  <FaChrome/>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })} 
          </LCARD>
        </MIDDLE>
        <RIGHT>
          <RHEADER>
            <GiTronArrow/>
            <h1> Your Level</h1>
          </RHEADER>
          <LCARD>
            
            {data1.map((item,index) => {
              return(
                <div key={index} className="card-body">
                  <FaChrome/>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })} 
          </LCARD>
        </RIGHT>
      </BODY>
    </DIV>
  )
}

export default Homepage

const DIV = styled.div`
  color: #fff;
  flex: 2;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 0 1rem 1rem 0;

  @media screen and (max-width: 768px){
    border-radius: 1rem;
  }
`
const HEADER = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBGf1744XuLEGLSTa7Sed1pws2Oqseqz06g&usqp=CAU");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`

const TEXT = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  p{
    margin-right: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    opacity: 0.7;
    cursor: pointer;

    :hover{
      color: white;
      opacity: 1;
      border-bottom: 2px solid blue;
    }
  }
`
const BODY = styled.div`
  display: flex;
`
const LEFT = styled.div`
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.3);
  margin: 0 1rem 0 1rem;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 1rem;
  width: 12rem;
  background: rgba(8, 8, 8, 0.15);
  backdrop-filter: blur(5px);

`
const LHEADER = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;

  svg{
    transform: rotate(270deg);
    margin-left: 5px;
  }
  h1{
    font-size: 1rem;
    margin-left: 1rem;
  }
`
const LCARD = styled.div`
  text-align: left;
  
  h5{
    margin-left: 10px;
    font-size: 0.8rem;
  }
  p{
    font-size: 0.7rem;
    margin-top: -20px;
    margin-left: 10px;
    opacity: 0.7;
  }
`
const MIDDLE = styled.div`
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 12rem;
  padding: 10px;
  margin-bottom: 1rem;
  background: rgba(8, 8, 8, 0.15);
  backdrop-filter: blur(5px);
`
const MHEADER = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;

  svg{
    transform: rotate(270deg);
    margin-left: 5px;
  }
  h1{
    font-size: 1rem;
    margin-left: 1rem;
  }
`
const RIGHT = styled.div`
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.3);
  margin: 0 1rem 0 1rem;
  width: 12rem;
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: rgba(8, 8, 8, 0.15);
  backdrop-filter: blur(5px);
`
const RHEADER = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;

  svg{
    transform: rotate(270deg);
    margin-left: 5px;
  }
  h1{
    font-size: 1rem;
    margin-left: 1rem;
  }
`