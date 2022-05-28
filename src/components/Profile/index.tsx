import React from 'react'

import s from './Profile.module.css'
import profileImg from '../../assets/profileImg.jpeg'
import MyPosts from './MyPosts'

const Profile = () => {
  return <>
    <div className={s.content}>
      <div className={s.profileImg}>
        <img src={profileImg} alt='Profile Image' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  </>
}

export default Profile
