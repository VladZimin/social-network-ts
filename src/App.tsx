import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Dialogs from './components/Dialogs'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-content">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages" element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
