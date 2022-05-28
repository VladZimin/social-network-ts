import React from 'react'

import s from './Profile.module.css'
import profileImg from '../../assets/profileImg.jpeg'

const Profile = () => {
  return <>
    <div className={s.content}>
      <div className={s.profileImg}>
        <img src={profileImg} alt='Profile Image' />
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
  </>
}

export default Profile
