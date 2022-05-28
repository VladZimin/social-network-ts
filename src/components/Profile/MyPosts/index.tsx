import React from 'react'

import s from './MyPosts.module.css'

import Post from './Post'


const MyPosts = () => {
  return <>
    <div className={s.postsBlock}>
      My Posts
      <div>
        <textarea />
        <button>отправить</button>
      </div>
      <div className={s.allPosts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  </>
}

export default MyPosts
