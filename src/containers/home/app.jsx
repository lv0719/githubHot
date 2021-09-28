import React from 'react'
import './styles/index.css'
import './styles/loading.css'
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'

let a = 10
let apiArr = [
  'https://api.github.com/search/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories',
  'https://api.github.com/search/repositories?q=stars:3E1+language:javascript&sort=stars&order=desc&type=Repositories',
  'https://api.github.com/search/repositories?q=stars:3E1+language:ruby&sort=stars&order=desc&type=Repositories',
  'https://api.github.com/search/repositories?q=stars:3E1+language:java&sort=stars&order=desc&type=Repositories',
  'https://api.github.com/search/repositories?q=stars:3E1+language:css&sort=stars&order=desc&type=Repositories',
]

function App() {
  let dataArr = []
  const listArrObj = [
    {
      name: 'All',
      id: 0,
      isChecked: true,
    },
    {
      name: 'JavaScript',
      id: 1,
      isChecked: false,
    },
    {
      name: 'Ruby',
      id: 2,
      isChecked: false,
    },
    {
      name: 'Java',
      id: 3,
      isChecked: false,
    },
    {
      name: 'Css',
      id: 4,
      isChecked: false,
    },
  ]
  const { useState, useEffect } = React
  const [name, setName] = useState(listArrObj)
  const [data, setData] = useState(dataArr)
  const [isLoad, setIsLoad] = useState(false)
  //点击切换头部
  function changeHead(id) {
    setIsLoad(true)
    let list = [...name]
    list.forEach(item => {
      item.isChecked = false
    })
    list.forEach(item => {
      if (item.id == id) {
        item.isChecked = true
      }
    })
    setName(list)

    axios.get(apiArr[id]).then(res => {
      if (res.data.items) {
        dataArr = res.data.items
        setData(dataArr)
        setIsLoad(false)
      } else {
        console.log('err')
        return []
      }
    })
  }

  useEffect(() => {
    setIsLoad(true)
    axios
      .get(
        'https://api.github.com/search/repositories?q=stars:%3E1&sort=starts&order&desc&type=Repositories'
      )
      .then(res => {
        if (res.data) {
          dataArr = res.data.items
          setData(dataArr)
          setIsLoad(false)
        } else {
          console.log('err')
          return []
        }
      })
  }, [])
  return (
    <div className='box'>
      {isLoad && (
        <div id='loading'>
          <div id='loading_bg'>
            <div className='loader'>Loading...</div>
          </div>
        </div>
      )}
      <div className='header'>
        <ul>
          {name.map(item => {
            return (
              <li
                onClick={() => changeHead(item.id)}
                key={item.id}
                className={item.isChecked ? 'active' : ''}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='content'>
        {data.map((item, index) => {
          return (
            <div className='list-item' key={index}>
              <div className='item-index'>#{index + 1}</div>
              <div className='list-img'>
                <img src={item.owner.avatar_url} />
              </div>
              <div className='full_name'>
                <a href='#'>{item.full_name}</a>
              </div>
              <div className='name padding20'>
                <i className='fas fa-user icon-i' style={{ color: 'rgb(255, 191, 116)' }}></i>
                <a href='#'>{item.name}</a>
              </div>
              <div className='watchers_count padding20'>
                <i className='fas fa-star icon-i' style={{ color: 'rgb(255, 215, 0)' }}></i>
                {item.watchers_count}
              </div>
              <div className='forks_count padding20'>
                {' '}
                <i
                  className='fas fa-code-branch icon-i'
                  style={{ color: 'rgb(129, 195, 245)' }}
                ></i>
                {item.forks_count}
              </div>
              <div className='open_issues_count padding20'>
                <i
                  className='fas fa-exclamation-triangle icon-i'
                  style={{ color: 'rgb(241, 138, 147)' }}
                ></i>
                {item.open_issues_count}
              </div>
            </div>
          )
        })}
      </div>
      <div className='bottom'>@版权所有 liwei</div>
    </div>
  )
}
export { App }
