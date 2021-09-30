import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import requestData from './api/requestPlayer.js'
import './styles/result.css'
import { Button } from 'antd'

function Result() {
  const [playerOneData, setPlayerOneData] = useState({})
  const [playerTwoData, setPlayerTwoData] = useState({})
  //   function jumpBack() {
  //     window.location.href = window.location.origin + '/battle/result'
  //   }
  useEffect(() => {
    let search = window.location.search
    //"?player1=22&player2=2"
    let arr = search.split('&')
    let player1 = arr[0].substr(9)
    let player2 = arr[1].substr(8)

    requestData(player1)
      .then(res => {
        setPlayerOneData(res)
      })
      .catch(err => {
        console.log(err)
      })
    requestData(player2)
      .then(res => {
        setPlayerTwoData(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='result'>
      <div className='resultContent'>
        <div className='left'>
          <div className='center'>
            <p>Loser</p>
            <img src={playerOneData.avatar_url} />
            <p>Scores:{playerOneData.public_repos}</p>
            <p>{playerOneData.name}</p>
          </div>
        </div>
        <div className='right'>
          <div className='center'>
            <p>Loser</p>
            <img src={playerTwoData.avatar_url} />
            <p>Scores:{playerTwoData.public_repos}</p>
            <p>{playerTwoData.name}</p>
          </div>
        </div>
      </div>
      <div className='resetBtn'>
        <Button type='primary' shape='round' className='btn'>
          <NavLink to='/battle'>Reset</NavLink>
        </Button>
      </div>
    </div>
  )
}

export default Result
