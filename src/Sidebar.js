import React from 'react'
import styled from 'styled-components'
import {FaBook, FaMusic} from 'react-icons/fa'
import { GiJourney } from 'react-icons/gi'
import {GoPerson, GoSignOut} from 'react-icons/go'

function Sidebar(){
  return(
    <DIV>
      <HEADER>
        <h1>Title Logo</h1>
      </HEADER>
      <MAIN>
        <ul>
          <li><a href="#practise"><FaBook/> <span>PRACTISE</span> </a></li>
          <li><a href="#music"><FaMusic/> <span>SOUND & VIDEO</span> </a></li>
          <li><a href="#travel"><GiJourney/> <span>JOURNEY</span> </a></li>
          <li><a href="#account"><GoPerson/> <span>ACCOUNT</span> </a></li>
        </ul>
      </MAIN>
      <FOOTER>
        <h3> <GoSignOut/><span> LOG OUT</span> </h3>
      </FOOTER>
    </DIV>
  )
}

export default Sidebar

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(20, 33, 61, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 1rem 0 0 1rem;
  flex: 0.75;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const HEADER = styled.div`

  h1{
    color: #f9f9f9;
  }
`
const MAIN = styled.div`
  flex: 1;
  ul{
  text-align: left;
  padding-right: 1rem;
  
  }
  li{
    margin-top: 2rem; 
    
    :hover{
      background: rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(5px);
      color: white;
      border-radius: 10px;
    }
  }
  a{
    color: lightgray;
    transition: 0.5s;
    font-size: 0.8rem;

    :hover{
      color: #fff;
    } 
    span{
      margin-left: 10px;
    }
  }

`
const FOOTER = styled.div`
  color: lightgray;
  margin-top: 3rem;

  svg{
    margin-left: -20px;
  }
  span{
    margin-left: 10px;
    font-size: 1rem;
  }
`