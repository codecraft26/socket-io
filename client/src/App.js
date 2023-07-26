import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import RoomPage from './screens/RoomPage.jsx'
import LObbyScreen from './screens/LobbyScreen.jsx'
import Test from './screens/Test'
const App = () => {
  return (
    <div className='App'>
   <h1>Video chat App</h1>

   <Routes>
<Route path='/' element={<LObbyScreen/>}/>
<Route path="/room/:roomId" element={<RoomPage />} />
<Route path='/test' element={<Test/>}/>
   </Routes>
    </div>
  )
}

export default App
