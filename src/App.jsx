import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './component/Login'
import Stopwatch from './component/Stopwatch'
import Weatherapp from './component/Weatherapp'

function App() {


  return (
    <>
    {/* <Login /> */}
        {/* <Stopwatch /> */}
        <Weatherapp />
    </>
  )
}

export default App
