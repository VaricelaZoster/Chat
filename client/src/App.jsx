import React,{lazy} from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/login"))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/chat/:chatId" element = {<Chat/>}/>
        <Route path="/group" element = {<Group/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App