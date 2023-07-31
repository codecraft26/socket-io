import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './components/User/LoginSignUp';
import Profile from './components/User/Profile';

function App() {
  return (
    <div className="bg-slate-200 h-screen flex items-center justify-center">
    <Routes>
      <Route path='/auth' element={<LoginSignup/>}/>
      <Route path='/profile' element={<Profile/>}>

      </Route>
      </Routes>
    </div>
  );
}

export default App;