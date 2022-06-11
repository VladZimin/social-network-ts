import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog'

const usersList = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Vlad' },
    { id: 3, name: 'Denis' },
    { id: 4, name: 'Viktor' },
    { id: 5, name: 'Vadim' },
    { id: 6, name: 'Kolya' }
]

const DialogsPage = () => {
    return <div className={s.dialogsWrapper}>
        <div className={s.dialogsList}>
            {usersList.map( ( userObj, i ) => <Dialog key={i} {...userObj}/> )}
        </div>
        <div className={s.messageBlock}>
            <div className={s.messageItem}>Hello !</div>
            <div className={s.messageItem}>How are you!</div>
            <div className={s.messageItem}>Fine!</div>
        </div>
    </div>
}

export default DialogsPage
