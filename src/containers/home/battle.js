/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import requestData from './api/requestPlayer.js'
import Result from './result'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import './styles/battle.css'
import 'antd/dist/antd.css'
import { Input, Button, Avatar } from 'antd'

import {
  UsergroupAddOutlined,
  TrophyOutlined,
  RocketOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'

function Battle(props) {
  const [isTrueOne, setIstrueOne] = useState(true)
  const [isTrueTwo, setIstrueTwo] = useState(true)
  const [playOneValue, setPlayOneValue] = useState('')
  const [playTwoValue, setPlayTwoValue] = useState('')
  const [imgSrcOne, setImgSrcOne] = useState('')
  const [imgSrcTwo, setImgSrcTwo] = useState('')
  const [isshowOne, setIsShowOne] = useState(false)
  const [isshowTwo, setIsShowTwo] = useState(false)
  function playerOneClick() {
    requestData(playOneValue)
      .then(res => {
        const imgUrl = res.avatar_url
        setImgSrcOne(imgUrl)
        setIsShowOne(true)
      })
      .catch(err => {
        console.log(err)
      })
  }
  function playerTwoClick() {
    requestData(playTwoValue)
      .then(res => {
        const imgUrl = res.avatar_url
        setImgSrcTwo(imgUrl)
        setIsShowTwo(true)
      })
      .catch(err => {
        console.log(err)
      })
  }
  function playerInputOne(e) {
    const value = e.target.value
    setPlayOneValue(value)
  }
  function playerInputTwo(e) {
    const value = e.target.value
    setPlayTwoValue(value)
  }
  function toSentQuery() {
    props.history.push({
      pathname: '/battle/result',
      search: `player1=${playOneValue}&player2=${playTwoValue}`,
    })
    setIsShowOne(false)
    setIsShowTwo(false)
    setPlayOneValue('')
    setPlayTwoValue('')
  }
  useEffect(() => {
    if (playOneValue == '') {
      setIstrueOne(true)
    } else {
      setIstrueOne(false)
    }
    if (playTwoValue == '') {
      setIstrueTwo(true)
    } else {
      setIstrueTwo(false)
    }
  }, [playOneValue, playTwoValue])
  return (
    <>
      <Switch>
        <Route exact path='/battle/result' component={Result} />

        <div className='box'>
          <div className='battle'>
            <p className='battleTitle'>Instructions</p>
            <div className='battleContent'>
              <div className='left smallBox'>
                <span>Enter two Github:</span>
                <div>
                  <UsergroupAddOutlined
                    style={{ fontSize: 150, color: '#F4EA2A', background: 'antiquewhite' }}
                  />
                </div>
              </div>
              <div className='center smallBox'>
                <span>Battle</span>
                <div>
                  <TrophyOutlined
                    style={{ fontSize: 150, color: '#FFBF74', background: 'antiquewhite' }}
                  />
                </div>
              </div>
              <div className='right smallBox'>
                <span>See the winner</span>
                <div>
                  <RocketOutlined
                    style={{ fontSize: 150, color: '#808080', background: 'antiquewhite' }}
                  />
                </div>
              </div>
            </div>
            <p className='playersTitle'>Players</p>
          </div>
          <div className='players'>
            <div className='left'>
              <p>Player One</p>
              <div className='content'>
                {isshowOne ? (
                  <>
                    <div className='outPut'>
                      <div className='outPutLeft'>
                        <Avatar src={imgSrcOne} style={{ width: '40px', height: '40px' }} />
                        <span>{playOneValue}</span>
                      </div>
                      <div
                        className='outPutRight'
                        onClick={() => {
                          setIsShowOne(false)
                          setPlayOneValue('')
                        }}
                      >
                        <CloseCircleOutlined className='site-result-demo-error-icon' />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Input
                      placeholder='github username'
                      style={{ width: '66%', height: '50%' }}
                      onChange={e => playerInputOne(e)}
                      value={playOneValue}
                    />
                    <Button
                      type='dashed'
                      style={{ width: '32%', height: '50%' }}
                      disabled={isTrueOne}
                      onClick={() => playerOneClick()}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className='right'>
              <p>Player Two</p>
              <div className='content'>
                {isshowTwo ? (
                  <>
                    <div className='outPut'>
                      <div className='outPutLeft'>
                        <Avatar src={imgSrcTwo} style={{ width: '40px', height: '40px' }} />
                        <span>{playTwoValue}</span>
                      </div>
                      <div
                        className='outPutRight'
                        onClick={() => {
                          setIsShowTwo(false)
                          setPlayTwoValue('')
                        }}
                      >
                        <CloseCircleOutlined className='site-result-demo-error-icon' />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Input
                      placeholder='github username'
                      style={{ width: '66%', height: '50%' }}
                      onChange={e => playerInputTwo(e)}
                      value={playTwoValue}
                    />
                    <Button
                      type='dashed'
                      style={{ width: '32%', height: '50%' }}
                      disabled={isTrueTwo}
                      onClick={() => playerTwoClick()}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
          {isshowOne && isshowTwo && (
            <div className='Battle'>
              <Button
                className='battleButton'
                type='dashed'
                style={{ width: '100px' }}
                onClick={toSentQuery}
              >
                Battle
              </Button>
              <NavLink to='/battle/result'></NavLink>
            </div>
          )}
        </div>
      </Switch>
    </>
  )
}
export default withRouter(Battle)
