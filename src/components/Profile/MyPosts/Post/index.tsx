import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = ( props: PostPropsType ) => {
    return <>
        <div className={s.post}>
            <img src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg" alt="Avatar"/>
            {props.message}
            <div className={s.likePost}>likes: {props.likesCount}</div>
        </div>
    </>
}

export default Post
