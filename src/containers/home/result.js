import React, { useEffect, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import requestData from './api/requestPlayer.js'
import './styles/result.css'
import { Button, message } from 'antd'

function Result(props) {
  const [playerOneData, setPlayerOneData] = useState({})
  const [playerTwoData, setPlayerTwoData] = useState({})
  //   function jumpBack() {
  //     window.location.href = window.location.origin + '/battle/result'
  //   }
  useEffect(() => {
    let search = window.location.hash.split('?')[1]
    let searchParams = new URLSearchParams(search)
    //"player1=22&player2=2"
    let player1 = searchParams.has('player1') ? searchParams.get('player1') : ''
    let player2 = searchParams.has('player2') ? searchParams.get('player2') : ''
    if (player1 == '' || player2 == '') {
      console.log('缺少参数')
      message.error('参数丢失，返回battle页')
      props.history.push('/battle')
      return
    }
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
            <p>Winner</p>
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

export default withRouter(Result)
