import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import DialogsPage from './components/DialogsPage'

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-content">
                <Routes>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="messages/*" element={<DialogsPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
