import React from 'react'
import s from './Dialogs.module.css'

const usersList = [ 'Ivan', 'Vlad', 'Denis', 'Viktor', 'Vadim', 'Kolya' ]

const Dialogs = () => {
    return <div className={s.dialogsWrapper}>
        <div className={s.dialogsList}>
            {usersList.map( ( user, i ) => <div className={s.userItem + ` ${i === 3 && s.activeDialog}`}>{user}</div> )}
        </div>
        <div className={s.messageBlock}>
            <div className={s.messageItem}>Hello !</div>
            <div className={s.messageItem}>How are you!</div>
            <div className={s.messageItem}>Fine!</div>
        </div>
    </div>
}

export default Dialogs
