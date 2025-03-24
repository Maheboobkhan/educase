import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Landing from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
