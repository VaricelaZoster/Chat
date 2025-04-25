import React,{lazy} from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/login"))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App