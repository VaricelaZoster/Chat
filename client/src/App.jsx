import React,{lazy} from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/login"))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {

  let user = true

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/chat/:chatId" element = {<Chat/>}/>
          <Route path="/group" element = {<Group/>}/>
        </Route>
        <Route path="/login" element = {<ProtectRoute user={!user} redirect='/'>
          <Login/>
        </ProtectRoute>}/>


        <Route path="*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App