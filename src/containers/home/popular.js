import React from 'react'
import './styles/popular.css'
import './styles/loading.css'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import 'font-awesome/css/font-awesome.css'
import { message } from 'antd'

let langArr = ['', 'javascript', 'ruby', 'java', 'css']
const aa = 22
function Popular(props) {
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
  const [initPage, setInitPage] = useState(1)
  //是否开启下拉加载
  const [hasMore, setHasmore] = useState(true)
  const [count, setCount] = useState(0)
  //点击切换头部
  function changeHead(id) {
    props.history.push({
      pathname: '/',
      search: `language=${langArr[id]}`,
    })
    let list = [...name]
    list.forEach(item => {
      item.isChecked = false
    })
    list.forEach(item => {
      if (item.id === id) {
        item.isChecked = true
      }
    })
    setCount(() => 0)
    setData(data => data.splice(0))
    setName(list)
    setInitPage(() => 1)
    loadMoreData()
  }
  //接口请求函数
  function loadMoreData(page = 1) {
    let langUage = window.location.hash.split('=')[1]
    let reqPath = `https://api.github.com/search/repositories?q=stars:3E1${
      langUage !== '' ? '+language:' + langUage : ''
    }&sort=stars&order=desc&type=Repositories`
    setIsLoad(true)
    if (count >= 200) {
      //请求数据总数超过200,则不响应上拉加载
      setHasmore(false)
      setIsLoad(true)
      return false
    }
    axios
      .get(reqPath, {
        params: {
          page: page,
        },
      })
      .then(res => {
        if (res.status === 200) {
          dataArr = res.data.items
          let counts = dataArr.length + count
          setData([...dataArr, ...data])
          setCount(counts)
          console.log(1)
          setIsLoad(false)
        } else {
          console.log(2)
          setIsLoad(false)
          return
        }
      })
      .catch(err => {
        console.log(3)
        setIsLoad(false)
        message.error(err.message, 3)
      })
  }
  useEffect(() => {
    loadMoreData()
  }, [])
  return (
    <div className='box'>
      {isLoad && (
        <div id='loading'>
          <div id='loading_bg'>
            <div className='loaders'>Loading...</div>
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
      <InfiniteScroll
        initialLoad={false} // 不让它进入直接加载
        pageStart={initPage} // 设置初始化请求的页数
        loadMore={loadMoreData} // 监听的ajax请求
        hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
        useWindow={true} // 不监听 window 滚动条
        loader={
          <div className='loader' key={0} style={{ textAlign: 'center', marginBottom: '0' }}>
            正在加载 Loading
          </div>
        }
      >
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
      </InfiniteScroll>
    </div>
  )
}
export default Popular
