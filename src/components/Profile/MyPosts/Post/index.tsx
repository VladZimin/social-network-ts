import React from 'react'
import s from './Post.module.css'

const Post = () => {
  return <>
    <div className={s.post}>
      <img src='https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg' alt='Avatar' />
      Post 1
      <div className={s.likePost}>like</div>
    </div>
  </>
}

export default Post
