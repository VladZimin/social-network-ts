import React from 'react'

import s from './MyPosts.module.css'

import Post from './Post'

const MyPosts = () => {
    return <>
        <div className={s.postsBlock}>
            <h3>
                My Posts
            </h3>
            <div>
                <textarea/>
                <br/>
                <button>отправить</button>
            </div>
            <div className={s.allPosts}>
                <Post message="Привет!" likesCount={23}/>
                <Post message="Как дела?" likesCount={77}/>
            </div>
        </div>
    </>
}

export default MyPosts
