import React from 'react'
import './App.css'

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://img.icons8.com/ios/452/duolingo-logo.png' alt='Logo' />
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
        <div>Profile</div>
      </nav>
      <div className='content'>
        <div>
          <img src='http://severnykavkaz.ru/wp-content/uploads/2019/04/priroda-adygei-1200x540.jpg'
               alt='Profile Image' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My Posts
          <div>
            New Posts
          </div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
